const {Builder, Browser, By} = require('selenium-webdriver');

async function selectComponents() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://letcode.in/test");
    await driver.findElement(By.linkText("Drop-Down")).click();
    
   await driver.findElement(By.id("fruits")).sendKeys("Apple");

   let langOptions = await driver.findElements(By.id("lang"));

   for(const lang of langOptions){
    console.log(await lang.getText());
   }
}

selectComponents();