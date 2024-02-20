const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
},
    { _id: false }
)

const userSchema = new mongoose.Schema({
    nameSurname: String,

    email: String,

    password: String,

    phone: String,

    address: String,

    money: {
        type: Number,
        default: 0
    },

    needsHelp: {
        type: Boolean,
        default: false
    },

    basket: {
        type: [itemSchema],
        default: []
    },
});

module.exports = mongoose.model('User', userSchema);