const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PackageCustomer = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: String
    },
    discout: {
        type: Number
    },
    expiryDate: {
        type: Number
    },
    maxWeight: {
        type: String
    },
    total: {
        type: Number
    }
}, { timestamps: true })

module.exports = mongoose.model('PackageCustomer', PackageCustomer)