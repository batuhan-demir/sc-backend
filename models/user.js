const mongoose = require('mongoose');

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
});

module.exports = mongoose.model('User', userSchema);