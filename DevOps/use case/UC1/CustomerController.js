const customerService = require('./CustomerService');

const service = new customerService();

service.addNewCustomer('Ajay', 1)
    .then(res => {
        console.log("Customer Created", res);
    })
    .catch(err => {
        console.log("Error in Customer Creation", err);
    })

setTimeout(() => {
    service.addOrderByCustomerId('Tea', 10, 1)
        .then(res => {
            console.log("Order added", res);
        })
        .catch(err => {
            console.log("Error in adding order", err);
        })
}, 2000)

setTimeout(() => {
    service.addOrderByCustomerId('Rice', 100, 1)
        .then(res => {
            console.log("Order added", res);
        })
        .catch(err => {
            console.log("Error in adding order", err);
        })
}, 5000)

setTimeout(() => {
    service.fetchCustomerReportById(2)
        .then(res => {
            console.log(`-------Customer Report Start--------\n`);

            console.log(`Total Orders Value = ${res}\n`);

            console.log(`-------Customer Report End--------`);
        })
        .catch(err => {
            console.log(err);

        })
}, 10000)