const { expect } = require('@playwright/test');
class PurchasePage{
    constructor(page)
    {
     this.page=page;
    }
    cartBtn='#cartur'
    placeOrderBtn='.btn.btn-success'
    popupModal='div[id="orderModal"] div[class="modal-content"]'
    purchaseBtn='button[onclick="purchaseOrder()"]'
    

    async clickCart()
    {
      await this.page.locator(this.cartBtn).click();
      
    }

    async clickPurchase()
    {
        await this.page.locator(this.placeOrderBtn).click();
    }
 async enterDetails()
 {
    await this.page.locator(this.popupModal).waitFor({state:'visible'});
    await this.page.fill('#name', 'Abhi');
    await this.page.fill('#country', 'India');
    await this.page.fill('#city', 'TVM');
    await this.page.fill('#card', '123456789');
    await this.page.fill('#month', '12');
    await this.page.fill('#year', '2026');

 
}
async purchase()
{
   await this.page.click('button:has-text("Purchase")');
}
async verifyPurchase()
{
    const successPopup = this.page.locator('.sweet-alert');
    
    await successPopup.waitFor({ state: 'visible' });

await expect(successPopup).toContainText('Thank you for your purchase!');
}
}
module.exports=PurchasePage;