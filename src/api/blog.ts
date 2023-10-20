import axios from 'axios'

import { HOST } from '@/utils/constants'
import { Article } from '@/utils/types/Article'

export const fetchArticleBySlug = async (slug: string): Promise<Article> => {
	const res = await axios.get(`${HOST}/api/blog/${slug}`)
	return res.data
}

export const fetchBlogArticles = async (page: number, articlesPerPage: number): Promise<Omit<Article, 'text'>[]> => {
	const res = await axios.get(`/api/blog?page=${page}&articlesPerPage=${articlesPerPage}`)
	return res.data
}

