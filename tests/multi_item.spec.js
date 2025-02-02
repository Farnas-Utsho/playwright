const { test, expect } = require('@playwright/test');

test('Handle Multi Drop_Down', async ({ page }) =>{
    await page.goto('https://testautomationpractice.blogspot.com/'); 
    //Handeling Multiple options selections
    await page.selectOption('#colors',['Blue','Red','Yellow']) 
    
    await page.waitForTimeout(10000);
    













})