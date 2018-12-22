const fs = require('fs');

class DataAccessLayer {
    constructor(dataFilePath) {
        this.dataFilePath = dataFilePath;
    }

    addCustomerInDatabase(customerObj, callback) {
        try {
            fs.readFile(this.dataFilePath, (error, data) => {
                if (error) {
                    callback(error, null);
                }
                else {
                    let dataJson = JSON.parse(data);
                    let customerArray = dataJson.customers || [];
                    customerArray.push(customerObj);
                    dataJson.customers = customerArray;
                    let buff = Buffer.from(JSON.stringify(dataJson));
                    fs.writeFile(this.dataFilePath, buff, err => {
                        if (err) return callback(err, null);
                        return callback(null, customerObj);
                    });
                }
            })
        } catch (error) {
            callback(error, null)
        }
    }
    addOrderByCustomerIdInDatabase(orderObj, customerId, callback) {
        try {
            fs.readFile(this.dataFilePath, (error, data) => {
                if (error) {
                    callback(error, null);
                }
                else {
                    let dataJson = JSON.parse(data);
                    if (!dataJson.customers) {
                        return callback('No Customer in Database', null);
                    }
                    let customerArray = dataJson.customers;
                    customerArray.forEach((customer) => {
                        if (customer.id === customerId) {
                            customer.order.push(orderObj);
                        }
                    })
                    dataJson.customers = customerArray;
                    let buff = Buffer.from(JSON.stringify(dataJson));
                    fs.writeFile(this.dataFilePath, buff, err => {
                        if (err) return callback(err, null);
                        return callback(null, orderObj);
                    });
                }
            })

        } catch (error) {
            callback(error, null)
        }
    }
    fetchCustomerReportByIdFromDatabase(customerId, callback) {
        try {
            fs.readFile(this.dataFilePath, (error, data) => {
                if (error) {
                    callback(error, null);
                }
                else {
                    let totalOrdersValue;
                    let dataJson = JSON.parse(data);
                    if (!dataJson.customers) {
                        return callback('No Customer in Database', null);
                    }
                    let customerArray = dataJson.customers;
                    customerArray.forEach((customer) => {
                        if (customer.id === customerId) {
                            totalOrdersValue = customer.order.reduce(function (accumulator, currentValue) {
                                return accumulator + currentValue.value;
                            }, 0);
                        }
                    })
                    if(totalOrdersValue)
                    return callback(null,totalOrdersValue);
                    return callback(`No Customer found with given id : ${customerId} `,null);
                }
            })
        } catch (error) {
            return callback(error, null);
        }

    }
}

module.exports = DataAccessLayer;