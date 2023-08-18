const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    shippingInfo: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        apartmentNo: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        },
    },
    paymentInfo: {
        paymentMethod: {
            type: String,
            enum: ['paypal', 'creditCard', 'other'],
            required: true
        },
        paypalEmail: {
            type: String,
            required: true
        },
        paymentStatus: {
            type: String,
            required: true
        },
        paypalTransactionId: {
            type: String
        },
        paypalPayerId: {
            type: String
        },
    },
    orderItems: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            color: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Color",
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
        }
    ],
    paidAt: {
        type: Date,
        default: Date.now()
    },
    totalPrice:{
        type: Number,
        required: true
    },
    totalPriceAfterDiscount:{
        type: Number,
        required: true
    },
    orderStatus:{
        type: String,
        default:"Ordered"
    },

},
    {
        timestamps: true,
    }
);

//Export the model
module.exports = mongoose.model('Order', orderSchema);