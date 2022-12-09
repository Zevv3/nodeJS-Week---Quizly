const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            'Please Enter a valid Email'
        ]
    }
}, {timestamps:true})

module.exports = mongoose.model('user', userSchema)

// 'slug' is just what follows the '/' in a url
// ex: alasdf.com/thisIsTheSlug

