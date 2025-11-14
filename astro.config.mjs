// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const isGhPages = process.env.GH_PAGES === 'true';

export default defineConfig({
  output: 'static',
  site: isGhPages ? 'https://pedroagentesocial.github.io' : undefined,
  base: isGhPages ? '/broker-lenders' : undefined,
  vite: {
    plugins: [tailwindcss()]
  }
});