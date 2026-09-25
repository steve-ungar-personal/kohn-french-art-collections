// Contact sheet of all source photos with detected page bbox, for review.
import sharp from 'sharp';
import path from 'node:path';
import { listSources, detectPage } from './lib.mjs';

const out = process.argv[2];
const srcs = listSources().filter(s => s.frame > 0);
const TW = 300, TH = 169;
const cols = 6;
const tiles = [];
for (const [k, s] of srcs.entries()) {
  const bb = await detectPage(s.file);
  const sc = TW / bb.imgW;
  const th = Math.round(bb.imgH * sc);
  const svg = `<svg width="${TW}" height="${th}"><rect x="${bb.left * sc}" y="${bb.top * sc}" width="${bb.width * sc}" height="${bb.height * sc}" fill="none" stroke="#0f0" stroke-width="3"/><text x="4" y="18" font-size="16" fill="#ff0" stroke="#000" stroke-width="0.6">${s.frame}-${s.index}</text></svg>`;
  const buf = await sharp(s.file).resize({ width: TW, height: th, fit: 'fill' }).composite([{ input: Buffer.from(svg) }]).jpeg().toBuffer();
  tiles.push({ input: buf, left: (k % cols) * TW, top: Math.floor(k / cols) * TH });
  console.log(s.frame, s.index, path.basename(s.file), JSON.stringify(bb));
}
const rows = Math.ceil(srcs.length / cols);
await sharp({ create: { width: cols * TW, height: rows * TH, channels: 3, background: '#222' } })
  .composite(tiles).jpeg({ quality: 80 }).toFile(out);
