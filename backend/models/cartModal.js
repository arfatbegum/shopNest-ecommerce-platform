const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color",
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

//Export the model
module.exports = mongoose.model('Cart', cartSchema);