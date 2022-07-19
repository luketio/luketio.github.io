import { PrismaClient } from "@prisma/client";
import type { RequestHandler } from "@sveltejs/kit";

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
	await prisma.$connect();

	const data = await prisma.contact_form.create({
		data: await request.json(),
	});

	prisma.$disconnect();

	return {
		status: 200,
		body: data,
	};
};
