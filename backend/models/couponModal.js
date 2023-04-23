const mongoose = require('mongoose');

var couponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
    },
    expiry: {
        type: data,
        required: true,
    },
    discount: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Coupon', couponSchema);