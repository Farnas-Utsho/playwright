const { test, expect } = require('@playwright/test');

test('Handle CheckBox', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Monday Checkbox (Correct)
  const mondayCheckbox = page.locator('#monday');
  await mondayCheckbox.waitFor({ state: 'visible' });
  await mondayCheckbox.check();
  await expect(mondayCheckbox).toBeChecked();
  expect(await mondayCheckbox.isChecked()).toBeTruthy();

  // Sunday Checkbox (Added Correct Locator)
  const sundayCheckbox = page.locator('#sunday'); // Assuming Sunday checkbox has id 'sunday' or //input[@id='sunday'] if id is not available
  await sundayCheckbox.waitFor({ state: 'visible' }); // Wait for Sunday checkbox

  // Negative Assertion (Corrected)
  await expect(sundayCheckbox).not.toBeChecked(); // Correct way to assert it's NOT checked
  expect(await sundayCheckbox.isChecked()).toBeFalsy(); // Another correct way to assert it is not checked



  
// Handle multiple checkboxes
// 1. Capture the locator of the checkboxes
const checkboxLocators = ['#sunday', '#monday', '#saturday', '#tuesday'];

//Checking the target locators 
for (const locator of checkboxLocators) {  // Corrected `of` instead of incorrect syntax
    await page.locator(locator).check();
}

//Unselecting multiple checkboxes which are already checked 
//Using uncheck

for (const locator of checkboxLocators) {
  
  // Corrected `of` instead of incorrect syntax
  if(await page.locator(locator).isChecked()){ await page.locator(locator).uncheck();}
 
}




  await page.waitForTimeout(5000); // Keep this if you need it for debugging or visual inspection, otherwise it's not needed for the test itself.
});