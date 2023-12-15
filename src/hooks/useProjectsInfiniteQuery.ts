import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchProjects } from '@/api/projects'

export const useProjectsInfiniteQuery = (limit = 10) =>
	useInfiniteQuery({
		queryFn: ({ pageParam = 1 }) => fetchProjects(pageParam, limit),
		queryKey: ['projects'],
		getNextPageParam: (lastPage, allPages) =>
			lastPage.length ? allPages.length + 1 : undefined,
	})
