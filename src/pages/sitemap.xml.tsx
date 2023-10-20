import { GetServerSideProps } from 'next'

import { fetchAllGalleryCategories, fetchAllSlugs } from '@/api/sitemap'
import { HOST } from '@/utils/constants'

const sitemapLocation = (url: string) => {
	return `<url>
	<loc>${url}</loc>
</url>
`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	let blogSlugsUrls, galleryCategoriesUrls

	try {
		const blogSlugs = await fetchAllSlugs()
		const galleryCategories = await fetchAllGalleryCategories()

		blogSlugsUrls = blogSlugs.map(slug => sitemapLocation(`${HOST}/blog/${slug}`)).join('')
		galleryCategoriesUrls = galleryCategories.map(category => sitemapLocation(`${HOST}/gallery/${category.name}`)).join('')
	} catch (error) {
		blogSlugsUrls = ''
		galleryCategoriesUrls = ''
	}

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${HOST}/</loc>
	</url>
	<url>
	   <loc>${HOST}/projects</loc>
	</url>
	<url>
	   <loc>${HOST}/gallery</loc>
	</url>
	${galleryCategoriesUrls}
	<url>
	   <loc>${HOST}/blog</loc>
	</url>
	${blogSlugsUrls}
</urlset>`

	res.setHeader('Content-Type', 'text/xml')
	res.write(sitemap)
	res.end()

	return { props: {} }
}

export default () => null
