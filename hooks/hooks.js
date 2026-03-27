const{Before,After}=require('@cucumber/cucumber')
const { chromium } = require('playwright')

Before(async function(){

    this.browser=await chromium.launch({headless:false});
    this.page=await this.browser.newPage();
})

After(async function(scenario)
{
    if(scenario.result.status=='FAILED'){
        await this.page.screenshot({
            path:`screenshots/failure.${Date.now()}.png`
        })

    }

    
        
    
    await this.browser.close();
})

    
