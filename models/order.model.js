const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    table: String,
    content: Array,
    total: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);