import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import preact from '@astrojs/preact';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [preact(), svelte({ extensions: [".svelte"] })],
});