const {By} = require('selenium-webdriver');

class LoginPage{

    #loginLink = By.linkText("Log in");
    #emailText = By.name("email");
    #passwordText = By.name("password");
    #loginBtn = By.xpath("//button[text()='LOGIN']");
    #forgotPassLink = By.xpath("//button[text()='Forgotten password?']");

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

}

exports.LoginPage = LoginPage;