import { NextRequest, NextResponse } from 'next/server'

import { ProjectService } from '@/server/ProjectsService'
import { ServerException } from '@/server/ServerException'

export const GET = async (request: NextRequest) => {
	const searchParams = request.nextUrl.searchParams

	const page = Number(searchParams.get('page')) || 1
	const projectsPerPage = Number(searchParams.get('projectsPerPage')) || 10

	try {
		const projects = await ProjectService.getAllProjects(page, projectsPerPage)

		return NextResponse.json(projects, { status: 200 })
	} catch (error) {
		if (error instanceof ServerException) {
			return NextResponse.json(
				{ message: error.message },
				{ status: error.status },
			)
		}
		return NextResponse.json(
			{ message: 'Внутренняя ошибка сервера' },
			{ status: 500 },
		)
	}
}
