import { defineConfig } from 'astro/config'

// Astro integrations.
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'

// Vite plugins.
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [mdx(), icon()],
})
