const {By} = require('selenium-webdriver');

class SignUpPage {

    #signupLink = By.linkText("Sign up");
    #name = By.id("name");
    #email = By.id("email");
    #password = By.id("pass");
    #agreeCheck = By.id("agree");
    #signupBtn = By.xpath("//button[text()='SIGN UP']");
    #signoutBtn = By.linkText("Sign out");

    async openSignupPage(){
        await driver.findElement(this.#signupLink).click();
    }
 //FIXME : Below methods doesn't get evoked from the test block.
    async enterName(nameValue){
        await driver.findElement(this.#name).sendKeys(nameValue);
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
        await expect(driver.findElement(this.#signoutBtn).isDisplayed()).toBe(true);
    }

}

exports.SignUpPage = SignUpPage;