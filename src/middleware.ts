import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
	const methodNotAllowedResponse = new NextResponse(
		JSON.stringify({ message: 'Неверный метод запроса' }),
		{
			status: 405,
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			nextConfig: {},
		},
	)

	if (
		(req.nextUrl.pathname !== '/api/feedback' && req.method !== 'GET') ||
		(req.nextUrl.pathname === '/api/feedback' && req.method !== 'POST')
	) {
		return methodNotAllowedResponse
	}
}
