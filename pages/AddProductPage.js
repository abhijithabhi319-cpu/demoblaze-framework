
class AddProductPage{
    constructor(page)
    {
        this.page=page;
    }
   
    productorLoc='//a[normalize-space()="Nexus 6"]'
    addToCartBtn='.btn.btn-success.btn-lg'

    async addProduct()
 {
    await this.page.locator(this.productorLoc).click();
}

async addToCartClick()
{
  await this.page.locator(this.addToCartBtn).click();
}
}
module.exports=AddProductPage
