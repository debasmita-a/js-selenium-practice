const {Builder, Browser, By, Key} = require('selenium-webdriver');

async function inputElements() {
        let driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get("https://letcode.in/test");
        await driver.manage().window().maximize();

        let inputText = await driver.findElement(By.xpath("//p[text()=' Input ']"));
        console.log("Is Input header available :::: " + await inputText.isDisplayed());

        console.log("Navigating to Edit form :::: ");
        await driver.findElement(By.linkText("Edit")).click();

        await driver.findElement(By.id("fullName")).sendKeys("Curran");
        let element = await driver.findElement(By.id("join"));
        await element.sendKeys(" lion");
        await element.sendKeys(Key.TAB);
        
        let text = await driver.findElement(By.id("getMe")).getAttribute("value");
        console.log("Text in the field ::: " + text);

        await driver.findElement(By.id("clearMe")).clear();
        let isTextboxDisabled = await driver.findElement(By.id("noEdit")).isEnabled();
        console.log(isTextboxDisabled);

        let notEditable = await driver.findElement(By.id("dontwrite")).isEnabled();
        console.log(notEditable);
       // await driver.close();
}

inputElements();
