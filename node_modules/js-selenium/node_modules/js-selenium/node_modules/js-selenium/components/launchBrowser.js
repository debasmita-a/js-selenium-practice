const {Builder, Browser, By} = require("selenium-webdriver");

(async function launchApp() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://letcode.in/test");
    await driver.manage().window().maximize();

})();






