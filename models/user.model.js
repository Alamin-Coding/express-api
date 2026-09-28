const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

module.exports = mongoose.model('User', userSchema);