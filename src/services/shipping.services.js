const ShippingCustomer = require('../models/ShippingCustomer')
const ShippingEnterprise = require('../models/ShippingEnterprise')


const createShippingCustomer = async body => {
    try {
        // const existPackage = await ShippingCustomer.findOne({ name: body.name })
        // if (existPackage) {
        //     return {
        //         message: 'Cart already exist',
        //         success: false
        //     }
        // }

        const newPackage = new ShippingCustomer(body)
        await newPackage.save()

        return {
            message: 'Successfully create',
            success: true,
            data: newPackage
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const createShippingEnterprise = async body => {
    try {
        // const existPackage = await PackageEnterprise.findOne({ name: body.name })
        // if (existPackage) {
        //     return {
        //         message: 'Cart already exist',
        //         success: false
        //     }
        // }

        const newPackage = new ShippingEnterprise(body)
        await newPackage.save()

        return {
            message: 'Successfully create',
            success: true,
            data: newPackage
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const getShippingCustomer = async () => {
    try {
        const package = await ShippingCustomer.find({})
        return {
            message: 'Successfully get',
            success: true,
            data: package
        }
    } catch (err) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const getShippingEnterprise = async () => {
    try {
        const package = await ShippingEnterprise.find({})
        return {
            message: 'Successfully get',
            success: true,
            data: package
        }
    } catch (err) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}



const updateShippingCustomer = async (id, body) => {
    try {
        const existPackage = await ShippingCustomer.findOne({ _id: id })
        if (!existPackage) {
            return {
                message: 'Shipping not exist',
                success: false
            }
        }
        await ShippingCustomer.updateOne({ _id: id }, body)
        return {
            message: 'Successfully update',
            success: true,
            data: body
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const updateShippingEnterprise = async (id, body) => {
    try {
        const existPackage = await ShippingEnterprise.findOne({ _id: id })
        if (!existPackage) {
            return {
                message: 'Shipping not exist',
                success: false
            }
        }
        await ShippingEnterprise.updateOne({ _id: id }, body)
        return {
            message: 'Successfully update PackageEnterprise',
            success: true,
            data: body
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const deleteShippingEnterprise = async id => {
    try {
        const existPackage = await ShippingEnterprise.findOne({ _id: id })
        if (!existPackage) {
            return {
                message: 'Shipping not exist',
                success: false
            }
        }

        await ShippingEnterprise.deleteOne({ _id: id })

        return {
            message: 'Successfully delete',
            success: true
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const deleteShippingCustomer = async id => {
    try {
        const existPackage = await ShippingCustomer.findOne({ _id: id })
        if (!existPackage) {
            return {
                message: 'Category not exist',
                success: false
            }
        }

        await ShippingCustomer.deleteOne({ _id: id })

        return {
            message: 'Successfully delete',
            success: true
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}


module.exports = {
    createShippingCustomer,
    createShippingEnterprise,
    getShippingCustomer,
    getShippingEnterprise,
    updateShippingCustomer,
    updateShippingEnterprise,
    deleteShippingCustomer,
    deleteShippingEnterprise

}