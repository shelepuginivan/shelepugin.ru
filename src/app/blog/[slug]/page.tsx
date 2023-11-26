import Head from 'next/head'
import { notFound } from 'next/navigation'

import ArticleHeader from '@/components/ArticleHeader/ArticleHeader'
import ArticleText from '@/components/ArticleText/ArticleText'
import ShareMenu from '@/components/ShareMenu/ShareMenu'
import { ArticleService } from '@/server/ArticleService'
import { ServerException } from '@/server/ServerException'
import ErrorMessage from '@/ui/ErrorMessage/ErrorMessage'
import { HOST } from '@/utils/constants'
import { descriptionFromText } from '@/utils/descriptionFromText'
import { errorMessage } from '@/utils/errorMessage'
import { Article } from '@/utils/types/Article'

interface Props {
	params: {
		slug: string
	}
}

const ArticlePage = async ({ params }: Props) => {
	let article: Article

	try {
		article = await ArticleService.getArticleBySlug(params.slug)
	} catch (error) {
		if (error instanceof ServerException && error.status == 404) {
			notFound()
		}

		return <ErrorMessage message={errorMessage(error)} />
	}

	const title = `${article.title} | Иван Шелепугин`
	const description = descriptionFromText(article.text)
	const url = `${HOST}/blog/${article.slug}`

	return (
		<>
			<Head>
				<meta name='description' content={description} />
				<meta name='og:title' content={title} />
				<meta name='og:description' content={description} />
				<meta name='og:type' content='article' />
				<meta name='og:image' content={article.previewUrl} />
				<meta name='og:url' content={url} />
				<title>{title}</title>
			</Head>
			<main>
				<ArticleHeader {...article} />
				<ArticleText text={article.text} />
				<ShareMenu slug={article.slug} />
			</main>
		</>
	)
}

export default ArticlePage
