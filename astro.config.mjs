import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import UnoCSS from 'unocss/astro'

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solidJs(), vue(), svelte(), image(), UnoCSS(),]
});