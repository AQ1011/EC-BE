const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductType = new Schema({
    ProductType: {
        type: String,
        required: true
    },
    totalKg: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('ProductType', ProductType)