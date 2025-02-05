const { BasePage } = require("../pages/basepage");
const { LoginPage } = require("../pages/loginPage");
const { expect } = require("chai");

const basePage = new BasePage();
const loginPage = new LoginPage();

describe('Login Page Tests - Let Code', ()=>{
    before('Launch App', async ()=>{
        await basePage.launchApp("https://letcode.in/signin");
    })
    
    it('User Login Test', async ()=>{
        await loginPage.clickLoginLink();
        await loginPage.enterEmail("debasmita.adhikari9@gmail.com");
        await loginPage.enterPassword("Test123");
        await loginPage.clickLoginBtn();
        expect(await loginPage.getToastMessage()).to.include("Welcome");
    });
})