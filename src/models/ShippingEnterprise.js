const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ShippingEnterprise = new Schema({
    idProductType: {
        type: String,
        required: true
    },
    LoaiVanChuyen: {
        type: String,
        required: true
    },
    NoiNhan: {
        type: String
    },
    NoiGiao: {
        type: String
    },
    ChiPhi: {
        type: String
    },
    KhuyenMai: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('ShippingEnterprise', ShippingEnterprise)