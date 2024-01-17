import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchBlogArticles } from '@/api/blog'

export const useBlogArticlesInfiniteQuery = (limit = 10) =>
	useInfiniteQuery({
		initialPageParam: 1,
		queryFn: ({ pageParam }) => fetchBlogArticles(pageParam, limit),
		queryKey: ['blog-articles'],
		getNextPageParam: (lastPage, allPages) =>
			lastPage.length ? allPages.length + 1 : undefined,
	})
