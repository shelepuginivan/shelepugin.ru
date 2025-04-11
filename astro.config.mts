import { defineConfig, passthroughImageService } from 'astro/config'

// Astro integrations.
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'
import pagefind from 'astro-pagefind'

// Vite plugins.
import tailwindcss from '@tailwindcss/vite'

// Custom languages.
import gotmplSyntax from './langs/gotmpl.tmLanguage.json?raw'

import vue from '@astrojs/vue'

export default defineConfig({
    site: 'https://shelepugin.ru',

    integrations: [mdx(), icon(), pagefind(), vue()],

    image: {
        service: passthroughImageService(),
    },

    markdown: {
        shikiConfig: {
            theme: 'ayu-dark',
            langs: [JSON.parse(gotmplSyntax)],
        },
    },

    vite: {
        plugins: [tailwindcss()],
    },
})
