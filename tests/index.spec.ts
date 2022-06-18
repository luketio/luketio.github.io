import { expect, test } from "@playwright/test";

test("splash page works", async ({ page }) => {
	await page.goto("/");

	await expect(page.locator('text=Luke Tong').first()).toBeVisible();
	await expect(page.locator('text=Political and Environmental activist').first()).toBeVisible();
});
