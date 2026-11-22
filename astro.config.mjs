import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical origin for canonical links, Open Graph URLs, the sitemap and robots.txt.
// When a custom domain is added, set SITE_URL (or change the fallback below).
const site = process.env.SITE_URL || 'https://kohn-french-art-collections.vercel.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  // Keep newlines next to inline elements so wrapped prose keeps its spaces.
  compressHTML: false,
  // /philympia/ is only a redirect stub to /exhibitions/#philympia; keep it out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/philympia') })],
});
