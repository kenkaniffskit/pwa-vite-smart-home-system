import { z } from "zod";

const RegisterSchema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(3, { message: "Password must contain at least 3 character(s)" })
		.max(20, {
			message: "Password must be less than or equal to 20 character(s)",
		}),
	confirmPassword: z
		.string()
		.min(3, { message: "Password must contain at least 3 character(s)" })
		.max(20, {
			message: "Password must be less than or equal to 20 character(s)",
		}),
});

type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export { RegisterSchema, type RegisterSchemaType };
