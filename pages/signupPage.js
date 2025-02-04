const {By, until, wait} = require('selenium-webdriver');

class SignUpPage {

    #signupLink = By.linkText("Sign up");
    #nameText = By.id("name");
    #email = By.id("email");
    #password = By.id("pass");
    #agreeCheck = By.id("agree");
    #signupBtn = By.xpath("//button[text()='SIGN UP']");
    #signoutBtn = By.linkText("Sign out");
    #signupToastMsg = By.xpath("//div[@id='toast-container']");

    async openSignupPage(){
        await driver.findElement(this.#signupLink).click();
    }

    async enterName(nameValue){
        await driver.findElement(this.#nameText).sendKeys(nameValue);
    }

    async enterEmail(emailValue){
        await driver.findElement(this.#email).sendKeys(emailValue);
    }

    async enterPassword(passValue){
        await driver.findElement(this.#password).sendKeys(passValue);
    }

    async checkAgree(){
        await driver.findElement(this.#agreeCheck).click();
    }

    async clickSignupBtn(){
        await driver.findElement(this.#signupBtn).click();
    }

    async isSignoutBtnDisplayed(){
        return await driver.findElement(this.#signoutBtn).isDisplayed();
    }

    async getToastMessage(){
        return await driver.findElement(this.#signupToastMsg).getText();
    }
    

}

exports.SignUpPage = SignUpPage;