// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://yakyaz.dev',
  output: 'server',
  integrations: [mdx(), sitemap()],

  redirects: {
      "/pet": "https://pet-finder.yakyaz.dev/"
    },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});