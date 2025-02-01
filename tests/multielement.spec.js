const{test,expect} = require ('@playwright/test');


// Here target is to extract the text from the items name in the page 

test('locateMultipleElement',async({page})=>{

    await page.goto('https://www.demoblaze.com/');

//    const links = await page.$$('a');

//    for(const link of links ){
//             // extract the text from the  content
//            const linktext= await link.textContent();
//             console.log(linktext);   }
// // xapth = //div[@id='tbodyid']//div//h4/a


// here printing all the product name 
// page.waitForSelector("//div[@id='tbodyid']//h4/a");
const products = await page.$$("//div[@id='tbodyid']//h4/a");
console.log(products);
for (const product of products){

    const productname = await product.textContent();
    console.log(productname);

}

});



