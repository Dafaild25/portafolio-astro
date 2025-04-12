import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';



export default defineConfig({
    site: 'https://dafaild25.github.io',
    base:'portafolio-astro',
    integrations: [tailwind()],
});