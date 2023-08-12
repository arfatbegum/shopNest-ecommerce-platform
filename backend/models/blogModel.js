const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        default: "Admin",
    },
    images: [],
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    liked: {
        type: Boolean,
        default: false,
    },
    disliked: {
        type: Boolean,
        default: false,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    disLikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
},
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }
);

//Export the model
module.exports = mongoose.model('Blog', blogSchema);