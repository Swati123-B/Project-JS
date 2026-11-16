class BasePagw{
    constructor(name){
        this.name = name;
    }   
    open(){
        console.log(`Opening ${this.name} page`);
    }   
}
class LoginPage extends BasePagw{
    constructor(name){
        super(name);
    }   
    login(){
        console.log(`Logging in to ${this.name} page`);
    }
}
let loginPage = new LoginPage("Login");
loginPage.open();
loginPage.login();
