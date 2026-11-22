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

// ---- SEO helpers -----------------------------------------------------------

export const SITE_NAME = 'Famous French Arts';
export const KOHN_WIKI = 'https://en.wikipedia.org/wiki/Milton_Kohn';

/** Absolute URL on this site for a root-relative path. */
export const absUrl = (path: string, site: URL | string | undefined) => new URL(path, site ?? 'http://localhost/').href;

/** Canonical form of a path: directory-style pages always end in a slash. */
export const canonicalPath = (pathname: string) =>
  /\/$|\.[a-z0-9]+$/i.test(pathname) ? pathname : `${pathname}/`;

const SUFFIX = ` · ${SITE_NAME}`;

/** Title for <title>: kept near 60 characters so search results don't cut it mid-word. */
export function seoTitle(title: string | undefined, max = 65) {
  if (!title) return `${SITE_NAME} — The Milton & Janet Kohn Collection`;
  if (title.length + SUFFIX.length <= max) return title + SUFFIX;
  // Candidate shortenings: the title cut at a clause break. A colon is the best break
  // ("Name (year): what's on the page"), then commas and dashes.
  const cutAt = (re: RegExp) => [...title.matchAll(re)].map((m) => title.slice(0, m.index).trim()).filter((c) => c.length >= 18);
  for (const cuts of [cutAt(/:/g), cutAt(/[:,]| — | – /g)]) {
    const withSuffix = cuts.filter((c) => c.length + SUFFIX.length <= max).pop();
    if (withSuffix) return withSuffix + SUFFIX;
    const alone = cuts.filter((c) => c.length <= max).pop();
    if (alone) return alone;
  }
  return truncateTitle(title, max);
}

/** The title cut at a word boundary (no site suffix); used when a clause-cut title would be a duplicate. */
export function truncateTitle(title: string, max = 65) {
  if (title.length <= max) return title;
  const cut = title.slice(0, max - 1).replace(/\s+\S*$/, '').replace(/[\s,;:(–—-]+$/, '');
  return `${cut}…`;
}

/** Meta description: at most ~160 characters, cut at a sentence or word boundary. */
export function seoDescription(text: string, max = 160) {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const sentence = t.slice(0, max).match(/^(.*[.!?])\s/);
  if (sentence && sentence[1].length >= 80) return sentence[1];
  return `${t.slice(0, max - 1).replace(/\s+\S*$/, '').replace(/[\s,;:(–—-]+$/, '')}…`;
}

/** schema.org BreadcrumbList from [name, root-relative path] pairs. */
export function breadcrumbLd(items: [string, string][], site: URL | string | undefined) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: absUrl(path, site),
    })),
  };
}

/** schema.org Person for the collector, linked to Wikipedia where one exists. */
export const kohnLd = {
  '@type': 'Person',
  name: 'Milton Kohn',
  alternateName: 'Milton Mendel Kohn',
  sameAs: [KOHN_WIKI],
};
