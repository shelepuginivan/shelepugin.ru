import axios from 'axios'

import { Article } from '@/utils/types/Article'

export const fetchBlogArticles = async (
	page: number,
	limit: number,
): Promise<Omit<Article, 'text'>[]> => {
	const res = await axios.get(`/api/blog?page=${page}&limit=${limit}`)
	return res.data
}
