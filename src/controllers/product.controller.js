const controller = require('./controller')
const productServices = require('../services/product.services')


const getAllProductType = async (req, res, next) => {
  try {
    const resServices = await productServices.getAllProductType(req.query)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (err) {
    console.log(err);
    return controller.sendError(res)
  }
}

const createProductType = async (req, res, next) => {
  try {
    const resServices = await productServices.createProductType(req.body)
    if (!resServices.success)
      return controller.sendSuccess(res, resServices.success, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }

}


const updateProductType = async (req, res, next) => {
  try {
    const { _id } = req.params
    const resServices = await productServices.updateProductType(_id, req.body)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

const deleteProductType = async (req, res, next) => {
  try {
    const { id } = req.params
    const resServices = await productServices.deleteProductType(id)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, {}, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}
const getFilter = async (req, res, next) => {
  try {
    const resServices = await productServices.getFilter()
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}
module.exports = Controller = {
  getAllProductType,
  createProductType,
  updateProductType,
  deleteProductType
}