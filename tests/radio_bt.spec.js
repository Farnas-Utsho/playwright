const { test, expect } = require('@playwright/test');

test('AssertionsTest', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2Fvendor%2Fapply');

    // Check the male radio button
    await page.locator("//input[@id='gender-male']").check();

    // Assertion using `toBeChecked`
    await expect(page.locator("//input[@id='gender-male']")).toBeChecked();

    // Another method to check (corrected)
    await expect(await page.locator("//input[@id='gender-male']").isChecked()).toBeTruthy();

    // Check that the female radio button is not selected
    await expect(await page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy();

    // Hold the code for observation
    await page.waitForTimeout(5000);
});
