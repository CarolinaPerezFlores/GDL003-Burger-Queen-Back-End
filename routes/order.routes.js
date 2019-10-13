var cors = require('cors')

module.exports = (app) => {
    const orders = require('../controllers/order.controllers');

    app.use(cors({credentials: true,}));

    app.get('/orders', orders.findAll);
}