import { prisma } from '$lib/server/database'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import dayjs from 'dayjs'
import httpStatus from 'http-status'

export const load: PageServerLoad = async ({ params }) => {
	const snippet = await prisma.snippet.findUnique({
		where: { id: Number(params.id) }
	})

	if (!snippet) {
		throw error(httpStatus.NOT_FOUND, {
			message: `Snippet with ID = ${params.id} not found`
		})
	}

	return {
		snippet: {
			...snippet,
			expiresAt: dayjs(snippet?.expiresAt).format('DD MMM YYYY [a]t HH:mm'),
			createdAt: dayjs(snippet?.createdAt).format('DD MMM YYYY [a]t HH:mm')
		}
	}
}
