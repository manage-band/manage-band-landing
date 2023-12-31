import netlify from '@astrojs/netlify/functions';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://manage.band/',
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
});
