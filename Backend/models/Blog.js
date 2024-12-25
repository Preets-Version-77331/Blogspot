const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    liked: {type: Boolean, default: false},
    like: {type: Number, default: 0},
    category: {type: String, required: true},
    comments: [{
        userName: {type: String, required:true},
        content: {type: String, required:true},
        createdAt: {type: Date, default: Date.now()},
    }]
});

module.exports = mongoose.model('Blog', blogSchema);