import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  // Keep newlines next to inline elements so wrapped prose keeps its spaces.
  compressHTML: false,
});
