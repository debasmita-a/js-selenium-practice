const { BasePage } = require("../pages/basepage");
const { SignUpPage } = require("../pages/signupPage");
const {expect} = require('chai');

const basePage = new BasePage();
const signupPage = new SignUpPage();

describe('Sign up - LetCode tests', ()=>{

    before('Launch app', async ()=>{
        await basePage.launchApp("https://letcode.in/test");
    })

    
    it('User should be able to signup successfully', async ()=>{
        await signupPage.openSignupPage();
        await signupPage.enterName("Debasmita A");
        await signupPage.enterEmail("debasmita.adhikari9@gmail.com");
        await signupPage.enterPassword("Test123");
        await signupPage.checkAgree();
        await signupPage.clickSignupBtn();
        expect(await signupPage.isSignoutBtnDisplayed()).to.be(true);

    })
})