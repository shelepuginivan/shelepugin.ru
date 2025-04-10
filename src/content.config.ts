import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

const blog = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/data/blog' }),
})

const projects = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/data/projects' }),
})

const archive = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/data/archive' }),
})

export const collections = { archive, blog, projects }
