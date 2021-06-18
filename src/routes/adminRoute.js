const express = require('express')
const Controller = require('../controllers/admin.controller')
const Validate = require("../validators")
const jwtServices = require("../services/jwt.services")
const router = express.Router()

router.get('/getUser', jwtServices.verify, Controller.getUser)

module.exports = router