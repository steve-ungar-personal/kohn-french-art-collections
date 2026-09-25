# Famous French Arts — the Milton & Janet Kohn Collection

Static website presenting Milton Kohn's hand-illustrated exhibition collection of French art stamps
(1961–1969): signed artist's proofs, deluxe proofs, first day covers, maximum cards and covers,
grouped by the eight frames in which it was originally exhibited.

Built with [Astro](https://astro.build) (static output). Hosted on Vercel, deployed from the CLI
(the Vercel project is not linked to this GitHub repo).

## Layout

| Path | Purpose |
|---|---|
| `frame 1` … `frame 8`, `overview.jpg` | Original phone photos (kept local, git-ignored). First photo in each frame folder is the frame-number card and is skipped. |
| `scripts/process-images.mjs` | Detects the album page in each photo, crops, rotates upright and writes WebP renditions to `public/images/` plus `src/data/images.json`. |
| `src/data/pages.ts` | One entry per album page: title, description, Kohn's notes, research and sources. |
| `src/data/stamps.ts` | Catalogue record (Yvert & Tellier no., engraver, first day, print run) for each stamp issue. |
| `src/pages/` | Home, frame index, page detail (with zoom viewer) and guide. |

## Adding frames 5–8

1. Put the photos in `frame 5` … `frame 8` (file names sort in shooting order; first photo = frame card).
2. `npm run images`
3. Add an entry per page to `src/data/pages.ts` (and any new issues to `src/data/stamps.ts`), plus a theme in `frameThemes`.
4. `npm run build`, then deploy.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs dist/
vercel deploy --prod
```
