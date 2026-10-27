import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://crossfoot.example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
