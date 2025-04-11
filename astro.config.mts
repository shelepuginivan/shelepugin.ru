import { defineConfig, passthroughImageService } from 'astro/config'

// Astro integrations.
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'
import pagefind from 'astro-pagefind'

// Vite plugins.
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    integrations: [mdx(), icon(), pagefind()],

    image: {
        service: passthroughImageService(),
    },

    markdown: {
        shikiConfig: {
            theme: 'gruvbox-dark-soft',
        },
    },

    vite: {
        plugins: [tailwindcss()],
    },
})
