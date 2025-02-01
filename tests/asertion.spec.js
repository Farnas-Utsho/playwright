const {test,expect}=require('@playwright/test')

test('Radion_button_Test',async({page})=>{

//open app url
 await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2Fvendor%2Fapply')
//1)To check the page has the url
 await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2Fvendor%2Fapply');

 //2)To check page has the title 
 await expect(page).toHaveTitle('nopCommerce demo store. Register');

 //3) Tocheck the element is visible or not 
 const logoElement = await page.locator('.header-logo');
 await expect(logoElement).toBeVisible()
 //4) To check the element is enable or not 
 const searchbox= await page.locator('#small-searchterms');
 await expect(searchbox).toBeEnabled()

 //5) To check the radio button  / check box is checked or not 
 const maleradio_button= await page.locator('#gender-male') // locate the element 
 await maleradio_button.click() // click the radio button 

 await expect(maleradio_button).toBeChecked()

//6)Locate the checkbox
const checkbox = page.locator('#Newsletter');
// Click the checkbox
await checkbox.check();

// Assert that the checkbox is checked
await expect(checkbox).toBeChecked();

//7)Locate element by attribute
const register=await page.locator('#register-button')
await expect(register).toHaveAttribute('type','submit')

//8)Locate element that have target text
const register_text= await page.locator('.page-title h1')
await expect(register_text).toHaveText('Register')
//9) Contain partial text 
await expect(register_text).toContainText('Reg')
//10) To check element contains the value
const emailinput=await page.locator('#Email')
await emailinput.fill('test@demo.com')
await expect(emailinput).toHaveValue('test@demo.com')

//11)count the drop down contains all the element as expected 
const day_options = await page.locator('select[name="DateOfBirthMonth"] option')
await expect(day_options).toHaveCount(13) 
 



})