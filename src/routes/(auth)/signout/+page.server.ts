import { checkAuth } from '$lib/server/auth'
import { redirect, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import status from 'http-status'
import { prisma } from '$lib/server/database'

export const load: PageServerLoad = async ({ locals }) => {
	checkAuth(locals)
	throw redirect(status.SEE_OTHER, '/')
}

export const actions: Actions = {
	default: async ({ locals, cookies }) => {
		checkAuth(locals)

		// change sessionId whenever auth status changes
		await prisma.user.update({
			where: { id: locals.user?.id },
			data: {
				sessionId: crypto.randomUUID()
			}
		})

		// unset session cookie
		cookies.set('_session', '', {
			path: '/',
			secure: process.env.NODE_ENV === 'production',
			httpOnly: true,
			sameSite: 'strict',
			expires: new Date(0)
		})

		throw redirect(status.SEE_OTHER, '/')
	}
}
