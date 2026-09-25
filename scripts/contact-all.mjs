// Contact sheet of ALL photos in given frame folders (incl. first), with detection box.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { detectPage } from './lib.mjs';

const [out, ...frames] = process.argv.slice(2);
const TW = 300, TH = 300, cols = 7;
const tiles = [];
let k = 0;
for (const f of frames) {
  const dir = path.join(process.cwd(), `frame ${f}`);
  for (const n of fs.readdirSync(dir).filter((n) => /\.jpe?g$/i.test(n)).sort()) {
    const file = path.join(dir, n);
    const m = await sharp(file).metadata();
    const bb = await detectPage(file);
    const sc = Math.min(TW / m.width, TH / m.height);
    const w = Math.round(m.width * sc), h = Math.round(m.height * sc);
    const svg = `<svg width="${w}" height="${h}"><rect x="${bb.left * sc}" y="${bb.top * sc}" width="${bb.width * sc}" height="${bb.height * sc}" fill="none" stroke="#0f0" stroke-width="3"/><text x="4" y="18" font-size="16" fill="#ff0" stroke="#000" stroke-width="0.6">${f}-${k % 100}</text></svg>`;
    const buf = await sharp(file).resize(w, h).composite([{ input: Buffer.from(svg) }]).jpeg().toBuffer();
    tiles.push({ input: buf, left: (k % cols) * TW, top: Math.floor(k / cols) * TH });
    console.log(`${f}-${k % 100}`, n, m.width, m.height, m.orientation);
    k++;
  }
}
await sharp({ create: { width: cols * TW, height: Math.ceil(k / cols) * TH, channels: 3, background: '#222' } }).composite(tiles).jpeg({ quality: 80 }).toFile(out);

