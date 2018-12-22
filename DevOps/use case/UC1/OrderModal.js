class Order {
    constructor(description='Test', value=0, id = new Date().getTime()) {
        this.description = description;
        this.id = id;
        this.value = value;
    }
}

module.exports = Order;