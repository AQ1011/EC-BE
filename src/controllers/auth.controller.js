const controller = require("./controller");
const authServices = require("../services/auth.services")
const User = require("../models/User");

const registerCustomer = async (req, res, next) => {
  try {

    console.log("register")
    const resServices = await authServices.registerCustomer(req.value.body)

    if (!resServices.success) return controller.sendSuccess(res, resServices.data, 300, resServices.message)

    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (err) {
    return controller.sendError(res)
  }
}

const registerEnterprise = async (req, res, next) => {
  try {

    console.log("register")
    const resServices = await authServices.registerEnterprise(req.value.body)

    if (!resServices.success) return controller.sendSuccess(res, resServices.data, 300, resServices.message)

    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (err) {
    return controller.sendError(res)
  }
}

const login = async (req, res, next) => {
  try {
    const resServices = await authServices.login(req.value.body)
    if (!resServices.success) {
      console.log(resServices.message)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    }
    // const token = jwtServices.createToken(resServices.data._id)

    return controller.sendSuccess(res, resServices.data, 200, resServices.message)

  } catch (err) {
    return controller.sendError(res)
  }
}

const loginAdmin = async (req, res, next) => {
  try {
    const resServices = await authServices.loginAdmin(req.value.body)
    if (!resServices.success) {
      return controller.sendSuccess(res, {}, 300, resServices.message)
    }
    // const token = jwtServices.createToken(resServices.data._id)

    return controller.sendSuccess(res, resServices.data, 200, resServices.message)

  } catch (err) {
    return controller.sendError(res)
  }
}

const getAuth = async (req, res, next) => {
  try {
    console.log("errr", req)
    const body = req.value.body
    const _id = body.decodeToken.data
    const token = body.token
    const resServices = await authServices.getAuth({ _id, token })
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) { // bug
    console.log(error)
    return controller.sendError(res)
  }
}

const verify = async (req, res) => {
  try {
    const { email } = req.params
    const resServices = await authServices.verifyUser(email)
    if (!resServices.success) {
      return controller.sendSuccess(res, resServices.success, 300, resServices.message)
    }

    return controller.sendSuccess(res, resServices.success, 200, resServices.message)

  } catch (error) {
    return controller.sendError(res)
  }

}

const getProfile = async (req, res, next) => {
  try {
    const { id } = req.params
    const resServices = await authServices.getProfile(id)
    if (!resServices.success) {
      return controller.sendSuccess(res, resServices.success, 300, resServices.message)
    }

    return controller.sendSuccess(res, resServices.data, 200, resServices.message)

  } catch (error) {
    return controller.sendError(res)
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    const resServices = await authServices.getAllUsers()
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (err) {
    return controller.sendError(res)
  }
}

const changePassword = async (req, res, next) => {
  try {
    const { newPassword, decodeToken } = req.value.body
    console.log(req.value.body)
    const id = decodeToken._id
    const resServices = await authServices.changePassword(id, req.body)
    return controller.sendSuccess(res, resServices.success, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }

}

module.exports = {
  registerCustomer,
  registerEnterprise,
  login,
  verify,
  getAuth,
  changePassword,
  getAllUsers
}