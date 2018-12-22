const express = require('express');
const ORDERS = require('../models/Orders');

const OrderCtrl = express.Router();

OrderCtrl.get('/', (req, res) => {
    res.status(200).json(ORDERS);
})

OrderCtrl.post('/', (req, res) => {
    res.end('orders-post');
})

OrderCtrl.put('/1', (req, res) => {
    res.end('orders-put');
})

OrderCtrl.delete('/1', (req, res) => {
    res.end('orders-delete');
})


module.exports = OrderCtrl;