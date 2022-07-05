import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const post = async (request: Request) => {
	await prisma.$connect();

	await prisma.contact_form.create({
		data: await request.json(),
	});

	prisma.$disconnect();
};
