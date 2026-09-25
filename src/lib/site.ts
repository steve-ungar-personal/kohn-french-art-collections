import images from '../data/images.json';
import { pages, type AlbumPage } from '../data/pages';

export const pad = (n: number) => String(n).padStart(2, '0');

export const pageHref = (p: { frame: number; index: number }) => `/frames/${p.frame}/${pad(p.index)}/`;
export const frameHref = (n: number) => `/frames/${n}/`;

export function imageFor(frame: number, index: number) {
  const slug = frame === 0 ? 'overview' : `frame-${frame}/${pad(index)}`;
  const meta = images.find((i) => i.slug === slug);
  return {
    thumb: `/images/${slug}-thumb.webp`,
    md: `/images/${slug}-md.webp`,
    lg: `/images/${slug}-lg.webp`,
    width: meta?.width ?? 2200,
    height: meta?.height ?? 2700,
    blurred: Boolean(meta && 'blurred' in meta && meta.blurred),
  };
}

export function neighbours(p: AlbumPage) {
  const i = pages.indexOf(p);
  return { prev: pages[i - 1], next: pages[i + 1] };
}

export function stats() {
  const count = (k: string) => pages.filter((p) => p.kinds.includes(k as never)).length;
  const issues = new Set(pages.flatMap((p) => p.stamps));
  return {
    pages: pages.length,
    signed: count('Signed artist’s proof'),
    deluxe: count('Deluxe proof'),
    maxi: count('Maximum card'),
    fdc: count('First day cover'),
    covers: count('Commercial cover'),
    sketches: count('Original sketch'),
    issues: issues.size,
  };
}
