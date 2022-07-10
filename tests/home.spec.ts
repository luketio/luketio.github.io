import { expect, test } from "@playwright/test";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

test.describe("Home Page", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("splash works", async ({ page }) => {});

	test("about works", async ({ page }) => {});

	test("contact form works", async ({ page }) => {
		const email = "jdoe@example.com";
		const name = "John Doe";
		const message = "This is a test message";

		// fill out form
		await page.fill("input[name=\"email\"]", email);
		await page.fill("input[name=\"name\"]", name);
		await page.fill("textarea[name=\"message\"]", message);

		await page.click("text=Submit");

		// make sure form data is sent to server
		await prisma.$connect();

		/*
		const formData = await prisma.contact_form.findFirst({
			where: {
				email: email,
				name: name,
				message: message,
			}
		});

		await console.log(formData);
		*/

		// expect(formData?.email).toBe(email);

		// expect(rows.count).toBeGreaterThanOrEqual(1);

		await prisma.$disconnect();
	});
});
