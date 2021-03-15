const mongoose = require('mongoose');

// https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
        // required: [true, 'Our text for error']
    },
    content: {
        type: String
        // required: [true, 'Our text for error']
    },
    date: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('article', articleSchema);
