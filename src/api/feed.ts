import axios from 'axios'

import { HOST } from '@/utils/constants'
import { Article } from '@/utils/types/Article'

export const fetchRecentArticles = async (): Promise<Article[]> => {
	const res = await axios.get(`${HOST}/api/blog`)
	return res.data
}
