const {Browser, By, Builder} = require('selenium-webdriver');

class SignUp{

    driver = new Builder().forBrowser(Browser.CHROME).build();

    #name = By.id("name");
    #email = By.id("email");
    #password = By.id("pass");
    #agreeCheck = By.id("agree");
    #signupBtn = By.xpath("//button[text()='SIGN UP']");

    async enterName(nameValue){
        await this.driver.findElement(this.#name).sendKeys(nameValue);
    }

    async enterEmail(emailValue){
        await this.driver.findElement(this.#email).sendKeys(emailValue);
    }

    async enterEmail(passValue){
        await this.driver.findElement(this.#password).sendKeys(passValue);
    }

    async checkAgree(){
        await this.driver.findElement(this.#agreeCheck).click();
    }

    async clickSignupBtn(){
        await this.driver.findElement(this.#signupBtn).click();
    }

}

exports.SignUp = SignUp