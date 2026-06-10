import { test, expect } from "@playwright/test";
test("rate.com", async ({ page }) => {
  await page.goto("https://ratelock.loandna.com/login");
  await page.getByPlaceholder("Enter username").fill("lendertwo@ldna.com");
  await page.getByPlaceholder("Enter password").fill("loanDNA@1234");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page).toHaveURL("https://ratelock.loandna.com/dashboard");
  await page.getByRole("button", { name: "New Loan Product Search" }).click();
  await page.getByRole("combobox", { name: "Product Category" }).click();
});
