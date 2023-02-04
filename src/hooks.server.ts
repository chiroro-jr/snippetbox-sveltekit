import type { Handle, HandleServerError } from '@sveltejs/kit'
import { authenticateUser } from '$lib/server/auth'

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = await authenticateUser(event)

	return await resolve(event)
}

export const handleError: HandleServerError = async ({ event }) => {
	// 404 - Page not found
	if (event.route.id === null) {
		return {
			message: 'Sorry, that page does not exist.'
		}
	}
	return {
		message: 'Something went wrong. Try again later.'
	}
}
