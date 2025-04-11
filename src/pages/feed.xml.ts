import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET() {
    const blog = await getCollection('blog')
    return rss({
        title: 'Блог Ивана Шелепугина',
        description: '',
        site: 'https://shelepugin.ru',
        items: blog
            .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
            .map((post) => ({
                title: post.data.title,
                pubDate: post.data.date,
                link: `/blog/${post.id}/`,
            })),
    })
}
