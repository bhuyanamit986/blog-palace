const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please provide the username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide the password']
    },
});

UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', function(next) {
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
});

const User = mongoose.model('User',UserSchema);
module.exports = User;