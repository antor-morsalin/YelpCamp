const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passport_local_mongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

UserSchema.plugin(passport_local_mongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;