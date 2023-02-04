import { checkAuth } from '$lib/server/auth'
import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import status from 'http-status'

export const load: PageServerLoad = async ({ locals }) => {
	checkAuth(locals)
	throw redirect(status.SEE_OTHER, '/')
}
