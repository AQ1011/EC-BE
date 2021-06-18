const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Enterprise = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    logo: {
        type: String,
        default: ''
    },
    nameEnterprise: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
        default: ''
    }

}, { timestamps: true })


module.exports = mongoose.model('Enterprise', Enterprise)