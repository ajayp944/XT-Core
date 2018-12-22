const DataAccessLayer = require('./DataAccessLayer');
const CustomerModal = require('./CustomerModal');
const OrderModal = require('./OrderModal');

const dataAccessLayer = new DataAccessLayer("data.json");
class CustomerService {
    constructor() {

    }
    addNewCustomer(name, id) {
        return new Promise((resolve, reject) => {
            let newCustomer = new CustomerModal(name, id);
            dataAccessLayer.addCustomerInDatabase(newCustomer, (err, data) => {
                if (err)
                    reject(err);
                else
                    resolve(data);
            })
        })
    }
    addOrderByCustomerId(description, value, customerId) {
        return new Promise((resolve, reject) => {
            let newOrder = new OrderModal(description, value);
            dataAccessLayer.addOrderByCustomerIdInDatabase(newOrder, customerId, (err, data) => {
                if (err)
                    reject(err);
                else
                    resolve(data);
            })
        })
    }

    fetchCustomerReportById(customerId) {
        return new Promise((resolve, reject) => {
            dataAccessLayer.fetchCustomerReportByIdFromDatabase(customerId, (err, data) => {
                if (err)
                    reject(err);
                else
                    resolve(data);
            })
        })
    }
}
module.exports = CustomerService;
