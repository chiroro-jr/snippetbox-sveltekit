import type { Handle, HandleServerError } from '@sveltejs/kit'
import { authenticateUser } from '$lib/server/auth'

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = await authenticateUser(event)

	return await resolve(event)
}

export const handleError: HandleServerError = async ({ error }) => {
	console.dir(error)
	return {
		message: 'Something went wrong. Try again later.'
	}
}
