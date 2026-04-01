const{Given,When,Then}=require('@cucumber/cucumber')
const PurchasePage=require('../pages/PurchasePage')

When('user purchase the product',async function(){
    const purchase=new PurchasePage(this.page)
    await purchase.clickCart();
    await purchase.clickPurchase();
    await purchase.enterDetails();
    await purchase.purchase();
    
})
Then('user should see purchase text',async function(){
    const purchase=new PurchasePage(this.page)
    await purchase.verifyPurchase();
})