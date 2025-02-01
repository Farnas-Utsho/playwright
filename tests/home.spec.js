const{test, expect} = require ('@playwright/test');



// here we have used async so that all the line in the automation execute one after another , async keyword makes the promise and return the promise 
//await keyword makes the function to wait for the promise 
//both of this keyword makes the javascript asynchro

test('home page ' ,async({page})=>{
    
//helps to go to website
    await page.goto ('https://www.demoblaze.com/');
//capture the page title 
const pagetitle = await page.title();
//print the title 
console.log('page title is : ',pagetitle); 
//validate the title 
await expect(page).toHaveTitle('STORE');

//Capture the url only && and print url 
const url= await page.url();

//print the url
console.log('page url : ',url)
//verify the url 
await expect(page).toHaveURL("https://www.demoblaze.com/ ");

//Close the page 
 await page.close();



})
