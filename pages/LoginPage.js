const { expect } = require('playwright/test')
class LoginPage{
    constructor(page)
    {
        this.page=page;

    }
    loginBtn='#login2'
    loginUserName='#loginusername'
    loginPass='#loginpassword'
    loginSubmitBtn='button[onclick="logIn()"]'
    loginNameLoc='#nameofuser'
    
    async login(user,pass)
    {
        await this.page.locator(this.loginBtn).click();
        await this.page.locator(this.loginUserName).fill(user);
        await this.page.locator(this.loginPass).fill(pass);
        await this.page.locator(this.loginSubmitBtn).click();
    }

    async VerifyUserName(user)
    {
       await this.page.waitForSelector(this.loginNameLoc);
    }

 
async clickAlert()
{
    this.page.on('dialog',async dialog=>
    {
        await dialog.accept();
    }
    )
}
}

module.exports=LoginPage