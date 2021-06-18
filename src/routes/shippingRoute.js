const express = require('express')
const Controller = require('../controllers/shipping.controller')
const SchemaValidate = require("../validators/auth.validator")
const Validate = require("../validators")
const jwtServices = require("../services/jwt.services")
const router = express.Router()


router.delete('/deleteShippingEnterprise/:id', jwtServices.verify, Controller.deleteShippingEnterprise)
router.delete('/deleteShippingCustomer/:id', jwtServices.verify, Controller.deleteShippingCustomer)
router.put('/updateShippingEnterprise/:id', jwtServices.verify, Controller.updateShippingEnterprise)
router.put('/updateShippingCustomer/:id', jwtServices.verify, Controller.updateShippingCustomer)
router.post('/createShippingEnterprise', jwtServices.verify, Controller.createShippingEnterprise)
router.post('/createShippingCustomer', jwtServices.verify, Controller.createShippingCustomer)
router.get('/getShippingEnterprise', Controller.getShippingEnterprise)
router.get('/getShippingCustomer', Controller.getShippingCustomer)


module.exports = router