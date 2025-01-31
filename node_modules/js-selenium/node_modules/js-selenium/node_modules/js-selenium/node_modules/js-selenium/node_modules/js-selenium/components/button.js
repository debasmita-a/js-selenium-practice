const {Builder, By, Browser, Point, Actions} = require('selenium-webdriver');

async function buttonComponents() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://letcode.in/test");
    await driver.findElement(By.linkText("Click")).click();
    await driver.findElement(By.id("home")).click();
    await driver.navigate().back();
    let xyBtn = await driver.findElement(By.id("position"));
    
    console.log((await xyBtn.getRect()).height + "  ^^^^^ " + (await xyBtn.getRect()).width);
 
    let eleColor = await driver.findElement(By.id("color")).getCssValue("background-color");
    console.log(eleColor);

    let eleHold = await driver.findElement(By.xpath("(//button[@id='isDisabled'])[2]"));
    console.log (await eleHold.getText());

}

buttonComponents();