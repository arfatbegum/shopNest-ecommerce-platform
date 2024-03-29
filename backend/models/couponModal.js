const mongoose = require('mongoose');

var couponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
    },
    expiry: {
        type: Date,
        required: true,
    },
    discount: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Coupon', couponSchema);