const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    product: String,
    category: String,
    price: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);