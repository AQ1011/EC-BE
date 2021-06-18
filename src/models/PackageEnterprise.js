const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PackageEnterprise = new Schema({
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
    expiryDate: {
        type: Number
    },
    total: {
        type: Number
    },
    discount: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('PackageEnterprise', PackageEnterprise)