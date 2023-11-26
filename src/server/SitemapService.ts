import { HOST } from '@/utils/constants'

import { ArticleService } from './ArticleService'
import { GalleryService } from './GalleryService'

export class SitemapService {
	private static sitemapLocation(url: string): string {
		return `
<url>
	<loc>${url}</loc>
</url>`
	}

	private static async getAllSlugs(): Promise<string[]> {
		try {
			return ArticleService.getSlugs()
		} catch {
			return []
		}
	}

	private static async getAllCategories(): Promise<string[]> {
		try {
			return GalleryService.getCategories()
		} catch {
			return []
		}
	}

	static async generateSitemap(): Promise<string> {
		const allSlugs = await SitemapService.getAllSlugs()
		const allCategories = await SitemapService.getAllCategories()

		const blogUrls = allSlugs
			.map((slug) => SitemapService.sitemapLocation(`${HOST}/blog/${slug}`))
			.join('')

		const galleryUrls = allCategories
			.map((category) =>
				SitemapService.sitemapLocation(`${HOST}/blog/${category}`),
			)
			.join('')

		return `<?xml version="1.0" encoding="UTF-8"?>
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
	${galleryUrls}
	<url>
	   <loc>${HOST}/blog</loc>
	</url>
	${blogUrls}
</urlset>`
	}
}
