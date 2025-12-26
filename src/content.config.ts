import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro:schema'

const announcements = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/data/announcements' }),
    schema: z.object({
        active: z.boolean().default(true),
        style: z.string().optional(),
    }),
})

const blog = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/data/blog' }),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        summary: z.string(),
        date: z.date(),
    }),
})

const projects = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/data/projects' }),
})

const archive = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/data/archive' }),
})

export const collections = { announcements, archive, blog, projects }
