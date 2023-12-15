import axios from 'axios'

import { Project } from '@/utils/types/Project'

export const fetchProjects = async (
	page: number,
	limit: number,
): Promise<Project[]> => {
	const res = await axios.get(`/api/projects?page=${page}&limit=${limit}`)
	return res.data
}
