// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

const isGhPages = process.env.GH_PAGES === 'true';

export default defineConfig({
  site: isGhPages ? 'https://pedroagentesocial.github.io' : undefined,
  base: isGhPages ? '/broker-lenders' : undefined,
  output: isGhPages ? 'static' : 'server',
  adapter: isGhPages ? undefined : vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});
