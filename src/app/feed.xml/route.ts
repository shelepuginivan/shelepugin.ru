import { Feed } from 'feed'
import { NextResponse } from 'next/server'

import { ArticleService } from '@/server/ArticleService'
import { ServerException } from '@/server/ServerException'
import { feedOptions, HOST } from '@/utils/constants'

export const dynamic = 'force-dynamic'

export const GET = async () => {
	const feed = new Feed(feedOptions)

	try {
		const articles = await ArticleService.getAllArticles(1, 20)

		articles.forEach((article) => {
			feed.addItem({
				date: new Date(article.publicationTime),
				link: `${HOST}/blog/${article.slug}`,
				title: article.title,
				image: article.previewUrl,
			})
		})
	} catch (error) {
		if (error instanceof ServerException) {
			return NextResponse.json(
				{ message: error.message },
				{ status: error.status },
			)
		}

		return NextResponse.json(
			{ message: 'Внутренняя ошибка сервера' },
			{ status: 500 },
		)
	}

	return new Response(feed.rss2(), {
		status: 200,
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
		},
	})
}
