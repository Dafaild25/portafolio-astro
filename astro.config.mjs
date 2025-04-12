import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    output: 'static',
    base: '/portafolio-astro/',
    integrations: [tailwind()],
});