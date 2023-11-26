import { SitemapService } from '@/server/SitemapService'

export const GET = async () => {
	const sitemap = await SitemapService.generateSitemap()

	return new Response(sitemap, {
		status: 200,
		headers: {
			'Content-Type': 'text/xml',
		},
	})
}
