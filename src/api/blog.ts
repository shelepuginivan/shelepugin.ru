import axios from 'axios'

import { Article } from '@/utils/types/Article'

export const fetchBlogArticles = async (
	page: number,
	articlesPerPage: number,
): Promise<Omit<Article, 'text'>[]> => {
	const res = await axios.get(
		`/api/blog?page=${page}&articlesPerPage=${articlesPerPage}`,
	)
	return res.data
}
