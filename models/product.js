const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,

    price: Number,

    stock: {
        normal: Number,
        free: Number
    },

    description: String,

    imageUrl: String
});

module.exports = mongoose.model('Product', productSchema);