const {Browser, Builder, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser(Browser.CHROME).build();

class BasePage{
    constructor(){
        global.driver = driver;
    }

    async launchApp(url){
        await driver.get(url);
        
        await driver.manage().window().maximize();
    }
}

exports.BasePage = BasePage;