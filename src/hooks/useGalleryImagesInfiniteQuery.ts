import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchGalleryImages } from '@/api/gallery'

export const useGalleryImagesInfiniteQuery = (category: string, limit = 10) =>
	useInfiniteQuery({
		queryFn: ({ pageParam = 1 }) =>
			fetchGalleryImages(category, pageParam, limit),
		queryKey: ['gallery', category],
		getNextPageParam: (lastPage, allPages) =>
			lastPage.length ? allPages.length + 1 : undefined,
	})
