const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ShippingCustomer = new Schema({
    TenNguoiNhan: {
        type: String,
        required: true
    },
    SdtNguoiNhan: {
        type: String,
        required: true
    },
    NoiNhanHang: {
        type: String
    },
    NoiGiaoHang: {
        type: String
    },
    ChiPhi: {
        type: String
    },
    KhoiLuong: {
        type: String
    },
    TenLoaiHang: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('ShippingCustomer', ShippingCustomer)