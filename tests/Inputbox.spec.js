const { test, expect } = require('@playwright/test');

test('handle inputbox', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Input box - First name
    const inputBox = page.locator("//input[@id='name']");

    // 1. Check if the input box is visible
    await expect(inputBox).toBeVisible();

    // 2. Check if the input box is empty
    await expect(inputBox).toBeEmpty();

    // 3. Check if the input box is editable
    await expect(inputBox).toBeEditable();

    // 4. Check if the input box is enabled
    await expect(inputBox).toBeEnabled();

    // Input value in the input box
    await inputBox.fill("testing");

    // Pausing the code
    await page.waitForTimeout(5000);
});
