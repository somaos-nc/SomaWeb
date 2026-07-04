// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://noam.github.io', // Placeholder, user will configure if different
  base: '/SomaWeb',
  vite: {
    plugins: [tailwindcss()]
  }
});