import axios from 'axios'

import { GalleryCategory } from '@/utils/types/GalleryCategory'
import { Image } from '@/utils/types/Image'

export const fetchGalleryCategories = async (): Promise<GalleryCategory[]> => {
	const res = await axios.get('/api/gallery')
	return res.data
}

export const fetchGalleryImages = async (
	category: string,
	page: number,
	imagesPerPage: number,
): Promise<Omit<Image, 'category'>[]> => {
	const res = await axios.get(
		`/api/gallery/${category}?page=${page}&imagesPerPage=${imagesPerPage}`,
	)
	return res.data
}
