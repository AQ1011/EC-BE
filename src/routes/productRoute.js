const express = require('express')
const Controller = require('../controllers/product.controller')
const jwtServices = require("../services/jwt.services")
const router = express.Router()

router.delete('/deleteProductType', jwtServices.verify, Controller.deleteProductType)
router.put('/updateProductType', jwtServices.verify, Controller.updateProductType)
router.post('/createProductType', jwtServices.verify, Controller.createProductType)
router.get('/getProductType', Controller.getAllProductType)



module.exports = router