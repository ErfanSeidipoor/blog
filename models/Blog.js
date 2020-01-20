
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    _user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog