const{Given,When,Then}=require('@cucumber/cucumber')
const LoginPage = require('../pages/LoginPage')
const data=require("../test-data/testData.json")
const{expect}=require('playwright/test')


Given('user navigate to url',{timeout:20000},async function(){
    await this.page.goto('https://www.demoblaze.com/index.html',)
}
)
When('user logs in to demoblaze',async function()
{
const loginpage=new LoginPage(this.page)
await loginpage.login('AbhijithJu','Passvp@100')
await loginpage.login(data.demoBlaze.validUser.username,data.demoBlaze.validUser.password)
})
Then('user should see user name',async function(){
    const loginpage=new LoginPage(this.page)
    await loginpage.VerifyUserName();
}
)
When('user login with invalid credentials',async function()
{
    const loginpage=new LoginPage(this.page);
    await loginpage.login(data.demoBlaze.invalidUser.username,data.demoBlaze.invalidUser.password)
})
Then('user should see an error message',async function(){
    const login=new LoginPage(this.page)

    await login.clickAlert();
    })





