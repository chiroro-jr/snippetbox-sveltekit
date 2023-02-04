import { f as fail, r as redirect } from "../../../../chunks/index.js";
import { z } from "zod";
import status from "http-status";
import bcrypt from "bcrypt";
import { p as prisma } from "../../../../chunks/database.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
const actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const signUpSchema = z.object({
      name: z.string({ required_error: "Name is required" }).min(2, { message: "Name must be at least 2 characters" }).max(50, { message: "Name must be less than 50 characters" }),
      email: z.string({ required_error: "Email is required" }).email({ message: "Email is invalid" }),
      password: z.string().min(8, { message: "Password must be at least 8 characters" }).max(50, { message: "Password must be less than 50 characters" }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
        message: "Password must have at least one uppercase letter and number"
      })
    });
    const result = signUpSchema.safeParse(formData);
    if (!result.success) {
      const { password: password2, ...values } = formData;
      const { fieldErrors } = result.error.flatten();
      return fail(status.BAD_REQUEST, {
        values,
        errors: {
          fieldErrors
        }
      });
    }
    const { name, password, email } = result.data;
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
      await prisma.user.create({
        data: { name, email, hashedPassword, sessionId: crypto.randomUUID() }
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          console.log(err.message);
          return fail(status.CONFLICT, {
            errors: {
              fieldErrors: {
                email: ["Email already in use. Try signing in"]
              }
            }
          });
        }
      }
      return fail(status.INTERNAL_SERVER_ERROR, {
        errors: {
          formErrors: ["Something went wrong. Try later"]
        }
      });
    }
    throw redirect(status.SEE_OTHER, "/signin");
  }
};
export {
  actions
};
