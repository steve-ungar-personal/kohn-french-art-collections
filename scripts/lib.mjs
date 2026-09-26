import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

export const root = process.cwd();

// Folder → frame number. Frames 1–9 are exhibition frames whose first photo is
// the frame-number card (skipped). "misc stamps" (binder pages) is published as
// frame 10 and has no card.
export const FOLDERS = [
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({ frame: n, dir: `frame ${n}`, card: true })),
  { frame: 10, dir: 'misc stamps', card: false },
  // Milton Kohn's handwritten Philympia 1970 lists.
  { frame: 11, dir: 'philympia', card: false },
];

// Source photos in display order. A photo whose file name already appeared in
// an earlier folder is treated as an accidental copy and ignored.
export function listSources() {
  const out = [{ frame: 0, index: 0, file: path.join(root, 'overview.jpg') }];
  const seen = new Set();
  for (const { frame, dir, card } of FOLDERS) {
    const full = path.join(root, dir);
    if (!fs.existsSync(full)) continue;
    const names = fs.readdirSync(full).filter((n) => /\.jpe?g$/i.test(n)).sort();
    const fresh = names.filter((n) => !seen.has(n));
    names.forEach((n) => seen.add(n));
    const pages = card ? fresh.slice(1) : fresh;
    pages.forEach((n, i) => out.push({ frame, index: i + 1, file: path.join(full, n) }));
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
