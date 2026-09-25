import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

export const root = process.cwd();

// Source photos in display order. The first photo in each frame folder is the
// frame-number card and is skipped.
export function listSources() {
  const out = [{ frame: 0, index: 0, file: path.join(root, 'overview.jpg') }];
  for (let f = 1; f <= 8; f++) {
    const dir = path.join(root, `frame ${f}`);
    if (!fs.existsSync(dir)) continue;
    const names = fs.readdirSync(dir).filter(n => /\.jpe?g$/i.test(n)).sort();
    names.slice(1).forEach((n, i) => out.push({ frame: f, index: i + 1, file: path.join(dir, n) }));
  }
  return out;
}

// Find the album page: largest connected region of bright, unsaturated pixels.
// Returns a bbox in original-image pixel coordinates.
export async function detectPage(file) {
  const W = 400;
  const img = sharp(file).resize({ width: W });
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: c } = info;
  const mask = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) {
    const r = data[i * c], g = data[i * c + 1], b = data[i * c + 2];
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    if (mn > 140 && mx - mn < 45) mask[i] = 1;
  }
  // Close small gaps (stamps/text on the page) with a dilation pass.
  const dil = new Uint8Array(w * h);
  const R = 4;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (!mask[y * w + x]) continue;
    for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) {
      const yy = y + dy, xx = x + dx;
      if (yy >= 0 && yy < h && xx >= 0 && xx < w) dil[yy * w + xx] = 1;
    }
  }
  const label = new Int32Array(w * h);
  let best = null, next = 1;
  const stack = [];
  for (let i = 0; i < w * h; i++) {
    if (!dil[i] || label[i]) continue;
    let n = 0, x0 = w, y0 = h, x1 = 0, y1 = 0;
    stack.push(i); label[i] = next;
    while (stack.length) {
      const p = stack.pop(); n++;
      const x = p % w, y = (p / w) | 0;
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
      for (const q of [p - 1, p + 1, p - w, p + w]) {
        if (q < 0 || q >= w * h || label[q] || !dil[q]) continue;
        if ((q === p - 1 && x === 0) || (q === p + 1 && x === w - 1)) continue;
        label[q] = next; stack.push(q);
      }
    }
    if (!best || n > best.n) best = { n, x0, y0, x1, y1 };
    next++;
  }
  const meta = await sharp(file).metadata();
  const s = meta.width / w;
  return {
    left: Math.max(0, Math.round((best.x0 + R) * s)),
    top: Math.max(0, Math.round((best.y0 + R) * s)),
    width: Math.round((best.x1 - best.x0 - 2 * R) * s),
    height: Math.round((best.y1 - best.y0 - 2 * R) * s),
    imgW: meta.width, imgH: meta.height,
  };
}
