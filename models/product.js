const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,

    price: Number,

    stock: {
        normal: Number,
        free: Number
    },

    description: String,

    imageUrl: {
        type: String,
        default: "/images/defaultProduct.jpg"
    }
});

module.exports = mongoose.model('Product', productSchema);