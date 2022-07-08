import { expect, test } from "@playwright/test";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

test.describe("Home Page", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("splash works", async ({ page }) => {

	})

	test("about works", async ({ page }) => {

	})

	test("contact form works", async ({ page }) => {
		const email = "jdoe@example.com";
		const name = "Luke";
		const message = "This is a test message";

		// fill out form
		await page.locator('[placeholder="Email"]').fill(email);
		await page.locator('[placeholder="Name"]').fill(name);
		await page.locator('textarea').fill(message);

		await page.locator('text=Submit').click();

		// make sure form data is sent to server
		await prisma.$connect();

		/*
		const formData = await prisma.contact_form.findFirst({
			where: {
				email: email,
				name: name,
				message: message,
			}
		})

		expect(formData?.email).toBe(email);

		*/
		// expect(rows.count).toBeGreaterThanOrEqual(1);

		prisma.$disconnect();
	})
});
