const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        minlength: 10,
        trim: true
    },
    publisher: {
        type: String,
        default: 'Gurwinder Singh'
    },
    date: {
        type: Date,
        default: Date.now
    },
})

//Blogs class
const Blogs = new mongoose.model('blogCollection',blogSchema);

module.exports = Blogs;

//object
// const obj = new Accounts;



