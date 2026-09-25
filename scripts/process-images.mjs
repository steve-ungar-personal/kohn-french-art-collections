// Crop each album page out of its source photo, rotate upright, and write
// web-sized WebP renditions to public/images. Originals stay out of the repo.
//   node scripts/process-images.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { root, listSources, detectPage } from './lib.mjs';

const SIZES = { thumb: 640, md: 1600, lg: 3000 };
const outRoot = path.join(root, 'public', 'images');
const manifest = [];

for (const s of listSources()) {
  const bb = await detectPage(s.file);
  // Negative pad trims a sliver inside the detected edge so no tablecloth shows.
  const pad = -Math.round(bb.imgW * 0.004);
  const region = {
    left: Math.max(0, bb.left - pad),
    top: Math.max(0, bb.top - pad),
  };
  region.width = Math.min(bb.imgW - region.left, bb.width + 2 * pad);
  region.height = Math.min(bb.imgH - region.top, bb.height + 2 * pad);

  // Frame photos were shot sideways (page top at the right edge).
  const angle = s.frame > 0 ? 270 : 0;
  const base = await sharp(s.file).extract(region).rotate(angle).toBuffer();
  const { width, height } = await sharp(base).metadata();

  const slug = s.frame === 0 ? 'overview' : `frame-${s.frame}/${String(s.index).padStart(2, '0')}`;
  fs.mkdirSync(path.dirname(path.join(outRoot, slug)), { recursive: true });
  for (const [name, w] of Object.entries(SIZES)) {
    await sharp(base)
      .resize({ width: Math.min(w, width) })
      .webp({ quality: name === 'thumb' ? 72 : 80 })
      .toFile(path.join(outRoot, `${slug}-${name}.webp`));
  }
  manifest.push({ frame: s.frame, index: s.index, slug, source: path.relative(root, s.file), width, height });
  console.log(slug, width, height);
}

fs.writeFileSync(path.join(root, 'src', 'data', 'images.json'), JSON.stringify(manifest, null, 2));
