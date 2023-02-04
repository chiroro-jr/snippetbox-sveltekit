import { redirect, type RequestEvent } from '@sveltejs/kit'
import { prisma } from '$lib/server/database'
import status from 'http-status'

export async function authenticateUser(event: RequestEvent) {
	const { cookies } = event
	const sessionId = cookies.get('_session')
	if (!sessionId) {
		return null
	}

	const user = await prisma.user.findUnique({
		where: { sessionId },
		select: {
			id: true
		}
	})

	if (!user) {
		return null
	}

	return user
}

export function checkAuth(locals: App.Locals) {
	if (!locals.user) {
		throw redirect(status.SEE_OTHER, '/signin')
	}
}
