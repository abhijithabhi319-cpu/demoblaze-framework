const{Given,When,Then}=require ('@cucumber/cucumber')
const AddProductPage=require('../pages/AddProductPage.js')
const LoginPage=require('../pages/LoginPage.js')


When('user select a product',async function(){
    const addproduct=new AddProductPage(this.page);
    await addproduct.addProduct();
})
When('user click on add to cart',async function() {

    const addproduct=new AddProductPage(this.page);
    await addproduct.addToCartClick();
})
Then('user should see a message',async function(){
    const login=new LoginPage(this.page);
    await login.clickAlert();
})