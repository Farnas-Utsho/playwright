const { test, expect } = require('@playwright/test');

test('Handle Drop_Down', async ({ page }) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');  
    
    //basic drop down
    //Multiple ways to select options from the drop down 

    //Option 1 : lable with visible text
    // await page.locator('#country').selectOption({label: 'China'});

    //Option 2 : Direct using visible text
      // await page.locator('#country').selectOption('China');//visible text 

    //Option 3 : Go with value 
      //await page.locator('#country').selectOption({value: 'uk'})
    //Option 4 : Find element with index 
     // await page.locator('#country').selectOption({index: '4'})
    
    //Option 5 : Direct from the page by using the text
     // await page.selectOption('#country','Brazil') 

    ////Assertions 
    
    // Option 1: check the total number of options in dropdown
    // const options = await page.locator('#country option') // all the options will be returened in this variable
    // await expect(options).toHaveCount(10) //input number as expected 

    // Option 2: Check number of options in drop down 

   //   const num_options= await page.$$('#country option')
   // //  console.log("Number of options : ",num_options.length) //will print the number of options 

   // await expect(num_options.length).toBe(10);

   // Option 3 :Presence of value in the drop down
      // const content = await page.locator('#country').textContent()// it will capture all the contents with this locator
     // await expect(content.includes('China')).toBeTruthy()

      //Option 4 : Using looping statement checking the presence of the element
      const contents= await page.$$('#country')
      let status = false;
      for( const option of contents)
        {
          //console.log(await option.textContent())
          let value = await option.textContent()
          if(value.includes('France')){
            value = value.trim()
            await page.selectOption('#country', value)
            status=true
            break
          }
          
        

        } 
        expect(status).toBeTruthy()







    await page.waitForTimeout(5000);





})