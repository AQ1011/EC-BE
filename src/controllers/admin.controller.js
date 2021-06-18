const controller = require("./controller");
const adminServices = require("../services/admin.services")
const User = require("../models/User");

const getUser = async (req, res, next) => {
  try {
    const resServices = await adminServices.getUser(req.value.body.decodeToken.data)

    if (!resServices.success) return controller.sendSuccess(res, resServices.data, 300, resServices.message)

    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (err) {
    return controller.sendError(res)
  }
}

module.exports = {
  getUser
}
