import { fail, type Actions, redirect } from '@sveltejs/kit'
import { z } from 'zod'
import status from 'http-status'
import { prisma } from '$lib/server/database'
import bcrypt from 'bcrypt'

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = Object.fromEntries(await request.formData())
		const signInSchema = z.object({
			email: z
				.string({ required_error: 'Email is requred' })
				.trim()
				.min(1, { message: 'Email is required' }),
			password: z
				.string({ required_error: 'Password is required' })
				.trim()
				.min(1, { message: 'Password is required' })
		})

		const result = signInSchema.safeParse(formData)
		if (!result.success) {
			const { fieldErrors } = result.error.flatten()
			const { password, ...values } = formData
			return fail(status.BAD_REQUEST, {
				errors: {
					values,
					fieldErrors
				}
			})
		}

		const { password, email } = result.data

		const user = await prisma.user.findUnique({
			where: { email }
		})

		if (!user) {
			return fail(status.UNPROCESSABLE_ENTITY, {
				errors: {
					formErrors: ['Email or password incorrect']
				}
			})
		}

		const passwordMatches = await bcrypt.compare(password, user.hashedPassword)

		if (!passwordMatches) {
			return fail(status.UNPROCESSABLE_ENTITY, {
				errors: {
					formErrors: ['Email or password incorrect']
				}
			})
		}

		const updatedUser = await prisma.user.update({
			where: { email },
			data: {
				sessionId: crypto.randomUUID()
			}
		})

		cookies.set('_session', updatedUser.sessionId, {
			path: '/',
			secure: false,
			httpOnly: true,
			maxAge: 60 * 60, // 1hr
			sameSite: 'strict'
		})

		throw redirect(status.SEE_OTHER, '/')
	}
}
