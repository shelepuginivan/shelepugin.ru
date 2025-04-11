import { getCollection } from 'astro:content'

export const latestPost = async () => {
    const collection = await getCollection('blog')

    return collection.sort((a, b) => b.data.date - a.data.date)[0].data
}
