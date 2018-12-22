class Customer {
    constructor(name, id) {
        this.name = name;
        this.id = id || Math.floor(Math.random() * 10 + 1);
        this.order = []
    }
}

module.exports = Customer;