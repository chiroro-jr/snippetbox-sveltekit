import { fail, type Actions, redirect, error } from '@sveltejs/kit'
import { z } from 'zod'
import httpStatus from 'http-status'
import { prisma } from '$lib/server/database'
import dayjs from 'dayjs'
import type { PageServerLoad } from './$types'
import { checkAuth } from '$lib/server/auth'

export const load: PageServerLoad = async ({ locals }) => {
	checkAuth(locals)
	return {
		expiresAt: 1
	}
}

export const actions: Actions = {
	createSnippet: async ({ request, locals }) => {
		const formData = Object.fromEntries(await request.formData())
		const createSnippetSchema = z.object({
			title: z
				.string({ required_error: 'Title is required' })
				.trim()
				.min(1, { message: 'Title is required' })
				.max(50, { message: 'Title must be less than 50 characters' }),
			content: z
				.string({ required_error: 'Content is required' })
				.trim()
				.min(1, { message: 'Content is required' }),
			expiresAt: z
				.enum(['1', '7', '30', '365'], { required_error: 'Expires In is required' })
				.transform((value) => Number(value))
		})

		const result = createSnippetSchema.safeParse(formData)
		if (!result.success) {
			const { fieldErrors } = result.error.flatten()
			return fail(httpStatus.BAD_REQUEST, {
				values: formData,
				errors: {
					fieldErrors
				}
			})
		}

		const { title, content, expiresAt } = result.data
		let id: number

		try {
			const snippet = await prisma.snippet.create({
				data: {
					title,
					content,
					expiresAt: dayjs().add(expiresAt, 'day').toDate(),
					user: {
						connect: {
							id: locals.user?.id
						}
					}
				}
			})

			id = snippet.id
		} catch (err) {
			console.log(err)
			throw error(httpStatus.INTERNAL_SERVER_ERROR, {
				message: 'Something went wrong. Try again later.'
			})
		}

		throw redirect(httpStatus.SEE_OTHER, `/snippets/${id}`)
	}
}
