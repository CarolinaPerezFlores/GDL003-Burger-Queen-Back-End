module.exports = (app) => {
    const orders = require('../controllers/order.controllers');

    app.get('/orders', orders.findAll);
}