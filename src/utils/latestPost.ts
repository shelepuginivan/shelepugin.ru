import { getCollection } from 'astro:content'

export const latestPost = async () => {
    const collection = await getCollection('blog')

    return collection.sort(
        (a, b) => b.data.date.getTime() - a.data.date.getTime(),
    )[0].data
}
