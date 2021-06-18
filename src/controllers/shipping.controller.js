const controller = require('./controller')
const shippingServices = require('../services/shipping.services')


const getShippingCustomer = async (req, res, next) => {
    try {
        const resServices = await shippingServices.getShippingCustomer()
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (err) {
        console.log(err);
        return controller.sendError(res)
    }
}

const getShippingEnterprise = async (req, res, next) => {
    try {
        const resServices = await shippingServices.getShippingEnterprise()
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (err) {
        console.log(err);
        return controller.sendError(res)
    }
}

const createShippingCustomer = async (req, res, next) => {
    try {
        const resServices = await shippingServices.createShippingCustomer(req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, resServices.success, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }

}

const createShippingEnterprise = async (req, res, next) => {
    try {
        const resServices = await shippingServices.createShippingEnterprise(req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, resServices.success, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }

}

const updateShippingCustomer = async (req, res, next) => {
    try {
        const { _id } = req.params
        const resServices = await shippingServices.updateShippingCustomer(_id, req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const updateShippingEnterprise = async (req, res, next) => {
    try {
        const { _id } = req.params
        const resServices = await shippingServices.updateShippingEnterprise(_id, req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const deleteShippingCustomer = async (req, res, next) => {
    try {
        const { id } = req.params
        const resServices = await productServices.deleteShippingCustomer(id)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, {}, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const deleteShippingEnterprise = async (req, res, next) => {
    try {
        const { id } = req.params
        const resServices = await productServices.deleteShippingEnterprise(id)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, {}, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}


module.exports = Controller = {
    createShippingCustomer,
    createShippingEnterprise,
    getShippingCustomer,
    getShippingEnterprise,
    updateShippingCustomer,
    updateShippingEnterprise,
    deleteShippingCustomer,
    deleteShippingEnterprise
}