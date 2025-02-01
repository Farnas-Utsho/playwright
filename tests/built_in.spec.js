/*
page.getByAltText() - to locate an element, usually an image, by its text alternative
page.getByPlaceholder() - to locate an input by placeholder
page.getByRole() - to locate by explicit and implicit accessibility attributes
page.getByText() - to locate by text content

page.getByLabel() - to locate text content
page.getByTitle() - to locate a form control by associated label's text
page.getByTestId() - to locate an element based on its data-testid attribute 
*/
const {test, expect} = require ('@playwright/test');

test('Built-in Locators',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    //Locating element getByAltText () 

    const logo =await page.getByAltText('company-branding');
    console.log(logo);

    //Verify the element is visible or not
    await  expect(logo).toBeVisible();
    
    //Locating element getByPlaceholder 
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');


    // Based on the role get the element (ex: button , inputbox )
    //role name ,{attribute name}
    await page.getByRole ('button', {type: 'submit'}).click()

    // //Locate element by text and validate by using expect  
    // await expect (await page.getByText('RaniaTest 98 Hamed')).toBeVisible();








})



