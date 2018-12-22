const Account =  require('../models/Account');

class NoSQLAccountRepositry {
    constructor(){
        console.log('repo created');
    }

    loadAccount(num){
        console.log('loading account ' + num)
        return new Account(num,1000.0)
    }
    updateAccount(acc) {
        console.log('updating ' + acc.name);
    }
}

module.exports = NoSQLAccountRepositry;