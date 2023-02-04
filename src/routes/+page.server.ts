import { prisma } from '$lib/server/database'
import type { PageServerLoad } from './$types'
import dayjs from 'dayjs'

export const load: PageServerLoad = async () => {
	const snippets = (
		await prisma.snippet.findMany({
			where: {
				expiresAt: {
					gt: new Date()
				}
			}
		})
	).map((snippet) => {
		return {
			...snippet,
			createdAt: dayjs(snippet.createdAt).format('DD MMM YYYY [a]t HH:mm'),
			expiresAt: dayjs(snippet.expiresAt).format('DD MMM YYYY [a]t HH:mm')
		}
	})

	return {
		snippets
	}
}
