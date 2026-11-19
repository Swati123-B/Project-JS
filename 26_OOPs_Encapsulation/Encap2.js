class ICICI{
    #balance;
    constructor(name, balance){
        this.name = name;
        this.#balance = balance;
    }
}
getBalance(){
    return this.#balance;
}
setBalance(balance,isCashier){
    this.#balance = balance;
}