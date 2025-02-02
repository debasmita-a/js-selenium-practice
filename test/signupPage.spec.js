const { BasePage } = require("../pages/basepage");
const { SignUpPage } = require("../pages/signupPage");

const basePage = new BasePage();
const signupPage = new SignUpPage();

describe('Sign up - LetCode tests', ()=>{

    before(async ()=>{
        await basePage.launchApp("https://letcode.in/test");
    })

    
    it('User should be able to signup successfully', ()=>{
        signupPage.openSignupPage();
        //TODO : Debug test
        signupPage.enterName("Debasmita A");
        signupPage.enterEmail("debasmitaadhikari26@gmail.com");
        signupPage.enterPassword("Test123");
        signupPage.checkAgree();
        signupPage.clickSignupBtn();
        signupPage.isSignoutBtnDisplayed();

    })
})