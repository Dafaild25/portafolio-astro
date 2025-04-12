import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
    output: 'static',
    base: isDev ? '/' : '/portafolio-astro/',
    integrations: [tailwind()],
});