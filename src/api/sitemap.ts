import axios from 'axios'

import { HOST } from '@/utils/constants'
import { GalleryCategory } from '@/utils/types/GalleryCategory'

export const fetchAllGalleryCategories = async (): Promise<GalleryCategory[]> => {
	const res = await axios.get(`${HOST}/api/gallery`)
	return res.data
}

export const fetchAllSlugs = async (): Promise<string[]> => {
	const res = await axios.get(`${HOST}/api/blog/slugs`)
	return res.data
}
