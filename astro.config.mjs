import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://angelicarojas.com',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      i18n: { defaultLocale: 'es' },
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
