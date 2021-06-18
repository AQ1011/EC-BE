const controller = require('./controller')
const shippingServices = require('../services/package.services')


const getPackageCustomer = async (req, res, next) => {
    try {
        const resServices = await shippingServices.getPackageCustomer()
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (err) {
        console.log(err);
        return controller.sendError(res)
    }
}

const getPackageEnterprise = async (req, res, next) => {
    try {
        const resServices = await shippingServices.getPackageEnterprise()
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (err) {
        console.log(err);
        return controller.sendError(res)
    }
}

const createPackageCustomer = async (req, res, next) => {
    try {
        const resServices = await shippingServices.createPackageCustomer(req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, resServices.success, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }

}

const createPackageEnterprise = async (req, res, next) => {
    try {
        const resServices = await shippingServices.createPackageEnterprise(req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, resServices.success, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }

}

const updatePackageCustomer = async (req, res, next) => {
    try {
        const { _id } = req.params
        const resServices = await shippingServices.updatePackageCustomer(_id, req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const updatePackageEnterprise = async (req, res, next) => {
    try {
        const { _id } = req.params
        const resServices = await shippingServices.updatePackageEnterprise(_id, req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const deletePackageCustomer = async (req, res, next) => {
    try {
        const { id } = req.params
        const resServices = await productServices.deletePackageCustomer(id)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, {}, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const deletePackageEnterprise = async (req, res, next) => {
    try {
        const { id } = req.params
        const resServices = await productServices.deletePackageEnterprise(id)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, {}, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}


module.exports = Controller = {
    createPackageCustomer,
    createPackageEnterprise,
    getPackageCustomer,
    getPackageEnterprise,
    updatePackageCustomer,
    updatePackageEnterprise,
    deletePackageCustomer,
    deletePackageEnterprise
}