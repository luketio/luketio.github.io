import { expect, test } from "@playwright/test";

test("navbar works", async ({ page }) => {
	await page.goto("/");

	await expect(page.locator("text=Blog").first()).toHaveAttribute("href", "/blog");
	await expect(page.locator("text=About").first()).toHaveAttribute("href", "/about");
	await expect(page.locator("text=Resume").first()).toHaveAttribute("href", "/resume/resume.pdf");
});
