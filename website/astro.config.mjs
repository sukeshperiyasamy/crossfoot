import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://crossfoot.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
