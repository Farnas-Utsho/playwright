//const {test,expect} = require ('@playwright/test')
import {test, expect} from '@playwright/test'
test('Locator',async({page})=>{

   await page.goto("https://www.demoblaze.com/")
   //click on login button using locator
  // await page.locator('id=login2').click();
  
   //another method
   await page.click('id=login2')

   //User name providing  user name -css
   //await page.locator("#loginusername").fill("Utsho")
   await page.fill('#loginusername','pavanol');
   //await page.type('#loginusername')


   //Password providing
   await page.fill("input[id='loginpassword']",'test@123')

   //click on log in button 
   await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

   //verify the logout link is present or not 
   const logoutlink= await page.locator("//a[normalize-space()='Log out']")
   await expect (logoutlink).toBeVisible();

   //close the page 
   await page.close()

})
