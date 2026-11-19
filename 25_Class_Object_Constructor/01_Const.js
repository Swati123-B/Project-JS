class Credentials {

    #apipassword
    constructor(username, password) {
        this.username = username;
        this.#apipassword = password;
    }  
    getAPI() {
        return this.#apipassword;
    }
} 
let cred = new Credentials("john", "1234");
console.log("Username:", cred.username);
console.log("Password:", cred.apipassword); // undefined
console.log("Password:", cred.getAPI()); //1234    
