import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

const blog = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/data/blog' }),
})

const projects = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/data/projects' }),
})

export const collections = { blog, projects }
