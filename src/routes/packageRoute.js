const express = require('express')
const Controller = require('../controllers/package.controller')
const SchemaValidate = require("../validators/auth.validator")
const Validate = require("../validators")
const jwtServices = require("../services/jwt.services")
const router = express.Router()


router.delete('/deletePackageEnterprise/:id', jwtServices.verify, Controller.deletePackageEnterprise)
router.delete('/deletePackageCustomer/:id', jwtServices.verify, Controller.deletePackageCustomer)
router.put('/updatePackageEnterprise/:id', jwtServices.verify, Controller.updatePackageEnterprise)
router.put('/updatePackageCustomer/:id', jwtServices.verify, Controller.updatePackageCustomer)
router.post('/createPackageEnterprise', jwtServices.verify, Controller.createPackageEnterprise)
router.post('/createPackageCustomer', jwtServices.verify, Controller.createPackageCustomer)
router.get('/getPackageEnterprise', Controller.getPackageEnterprise)
router.get('/getPackageCustomer', Controller.getPackageCustomer)


module.exports = router