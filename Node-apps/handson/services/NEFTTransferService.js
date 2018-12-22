const NoSQLAccountRepositry = require('../repositry/NoSQLAccountRepositry');
class NEFTTransferService {
    constructor() {
        console.log('NEFT obj created')
    }
    transfer(amount, from, to) {
        console.log('trnstion begin');
        const sqlRepo = new NoSQLAccountRepositry();
        const fromAcc = sqlRepo.loadAccount(from);
        const toAcc = sqlRepo.loadAccount(to);
        fromAcc.balance -= amount;
        toAcc.balance += amount;

        sqlRepo.updateAccount(fromAcc);
        sqlRepo.updateAccount(toAcc);
        console.log('transaction done')
    }
}

module.exports = NEFTTransferService;