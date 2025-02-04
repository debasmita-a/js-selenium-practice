const {By} = require('selenium-webdriver');

class LoginPage{

    #loginLink = By.linkText("Log in");
    #emailText = By.name("email");
    #passwordText = By.name("password");
    #loginBtn = By.xpath("//button[text()='LOGIN']");
    #forgotPassLink = By.xpath("//button[text()='Forgotten password?']");
    #loginSuccessMsg = By.id("toast-container");  //Welcome Debasmita A
    #signoutBtn = By.linkText("Sign out"); 

    async clickLoginLink(){
        await driver.findElement(this.#loginLink).click();
    }

    async enterEmail(email){
        await driver.findElement(this.#emailText).sendKeys(email);
    }

    async enterPassword(pass){
        await driver.findElement(this.#passwordText).sendKeys(pass);
    }

    async clickLoginBtn(){
        await driver.findElement(this.#loginBtn).click();
    }

    async clickForgottenPasswordLink(){
        await driver.findElement(this.#forgotPassLink).click();
    }

    async getToastMessage(){
        console.log(await driver.findElement(this.#loginSuccessMsg).getText());
        return await driver.findElement(this.#loginSuccessMsg).getText();
    }

    async isSignoutBtnDisplayed(){
        return await driver.findElement(this.#signoutBtn).isDisplayed();
    }

}

exports.LoginPage = LoginPage;