import { defineConfig } from 'astro/config'

// Astro integrations.
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'

// Vite plugins.
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    integrations: [mdx(), icon()],

    markdown: {
        shikiConfig: {
            theme: 'gruvbox-dark-soft',
        },
    },

    vite: {
        plugins: [tailwindcss()],
    },
})
