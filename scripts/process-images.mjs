// Crop each album page out of its source photo, rotate upright, blur any
// private details listed in image-overrides.json, and write web-sized WebP
// renditions to public/images. Originals stay out of the repo.
//   node scripts/process-images.mjs            # all frames
//   node scripts/process-images.mjs 6 7        # only these frames (0 = overview)
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { root, listSources, detectPage } from './lib.mjs';

const SIZES = { thumb: 640, md: 1600, lg: 3000 };
const outRoot = path.join(root, 'public', 'images');
const manifestPath = path.join(root, 'src', 'data', 'images.json');
const overrides = JSON.parse(fs.readFileSync(path.join(root, 'scripts', 'image-overrides.json'), 'utf8').replace(/^﻿/, ''));
const only = process.argv.slice(2).map(Number);
const binderBlur = JSON.parse(fs.readFileSync(path.join(root, 'scripts', 'binder-blur.json'), 'utf8'));

const pad2 = (n) => String(n).padStart(2, '0');
const slugOf = (s) => (s.frame === 0 ? 'overview' : `frame-${s.frame}/${pad2(s.index)}`);

const previous = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : [];
const manifest = new Map(previous.map((m) => [m.slug, m]));
const current = new Set();

for (const s of listSources()) {
  const slug = slugOf(s);
  current.add(slug);
  if (only.length && !only.includes(s.frame)) continue;
  const o = { ...(overrides[slug] ?? {}) };
  if (s.frame === 10 && binderBlur[pad2(s.index)]) o.blurMd = binderBlur[pad2(s.index)];
  const meta = await sharp(s.file).metadata();

  let region;
  if (Array.isArray(o.crop)) {
    const [l, t, w, h] = o.crop;
    region = { left: Math.round(l * meta.width), top: Math.round(t * meta.height), width: Math.round(w * meta.width), height: Math.round(h * meta.height) };
  } else if (o.crop === 'full') {
    region = { left: 0, top: 0, width: meta.width, height: meta.height };
  } else {
    const bb = await detectPage(s.file);
    // Negative pad trims a sliver inside the detected edge so no tablecloth shows.
    const pad = -Math.round(bb.imgW * 0.004);
    region = { left: Math.max(0, bb.left - pad), top: Math.max(0, bb.top - pad) };
    region.width = Math.min(bb.imgW - region.left, bb.width + 2 * pad);
    region.height = Math.min(bb.imgH - region.top, bb.height + 2 * pad);
  }

  // Landscape frame photos were shot sideways (page top at the right edge).
  // Binder pages (frame 10) were shot upright.
  const angle = o.rotate ?? (s.frame > 0 && s.frame !== 10 && meta.width > meta.height ? 270 : 0);
  let base = await sharp(s.file).extract(region).rotate(angle).toBuffer();
  const { width, height } = await sharp(base).metadata();

  // Blur boxes are pixels of the page as rendered 1600px wide.
  const k = width / 1600;
  // NOBLUR=1 renders without blur (for lining up the boxes).
  o.blur = process.env.NOBLUR ? [] : o.blurMd;
  if (o.blur?.length) {
    const layers = [];
    for (const [x, y, w, h] of o.blur) {
      const r = { left: Math.round(x * k), top: Math.round(y * k), width: Math.round(w * k), height: Math.round(h * k) };
      r.left = Math.min(r.left, width - 1);
      r.top = Math.min(r.top, height - 1);
      r.width = Math.max(1, Math.min(r.width, width - r.left));
      r.height = Math.max(1, Math.min(r.height, height - r.top));
      const patch = await sharp(base).extract(r).blur(Math.max(18, Math.round(r.height / 6))).toBuffer();
      layers.push({ input: patch, left: r.left, top: r.top });
    }
    base = await sharp(base).composite(layers).toBuffer();
  }

  fs.mkdirSync(path.dirname(path.join(outRoot, slug)), { recursive: true });
  // Binder pages carry pencilled catalogue-price tags, so they are published
  // only at a size where the tags are not legible (no full-size zoom).
  const sizes = s.frame === 10 ? { thumb: 640, md: 1000, lg: 1000 } : SIZES;
  for (const [name, w] of Object.entries(sizes)) {
    await sharp(base)
      .resize({ width: Math.min(w, width) })
      .webp({ quality: name === 'thumb' ? 72 : 80 })
      .toFile(path.join(outRoot, `${slug}-${name}.webp`));
  }
  manifest.set(slug, { frame: s.frame, index: s.index, slug, source: path.relative(root, s.file), width, height, blurred: Boolean(o.blur?.length) });
  console.log(slug, width, height, o.blur?.length ? `blurred ${o.blur.length}` : '');
}

const out = [...manifest.values()].filter((m) => current.has(m.slug)).sort((a, b) => a.frame - b.frame || a.index - b.index);
fs.writeFileSync(manifestPath, JSON.stringify(out, null, 2));
