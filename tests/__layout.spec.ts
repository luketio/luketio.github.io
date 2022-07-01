import { expect, test } from "@playwright/test";

test.describe("Header", () => {
	test.beforeEach(async ({page}) => {
		await page.goto("/");
	})

	test("navbar works", async ({ page }) => {
		await expect(page.locator("text=Posts").first()).toHaveAttribute("href", "/posts");
		await expect(page.locator("text=Resume").first()).toHaveAttribute("href", "/resume.pdf");
	});

	test("footer works", async ({ page }) => {
		
	})
})
