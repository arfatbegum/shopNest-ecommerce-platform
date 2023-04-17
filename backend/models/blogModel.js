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
    image: {
        type: String,
        default: "https://www.thoughtco.com/thmb/9-TaSUt-qCdOp1Xh3P43mutTmeA=/2121x1414/filters:fill(auto,1)/GettyImages-887987150-5c770377c9e77c00011c82e6.jpg",
    },
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