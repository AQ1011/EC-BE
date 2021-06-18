const express = require('express')
const productRoute = require('./productRoute')
const authRoute = require('./authRoute')
const shippingRoute = require('./shippingRoute')
const packageRoute = require('./packageRoute')
const paypalRoute = require('./paypalRoute')
const vnpayRoute = require('./vnpayRoute')
const adminRoute = require('./adminRoute')
const router = express.Router()

router.use('/product', productRoute)
router.use('/shipping', shippingRoute)
router.use('/package', packageRoute)
router.use('/payment-paypal', paypalRoute)
router.use('/payment-vnpay', vnpayRoute)
router.use('/auth', authRoute)
router.use('/admin', adminRoute)

module.exports = router