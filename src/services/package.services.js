const PackageCustomer = require('../models/PackageCustomer')
const PackageEnterprise = require('../models/PackageEnterprise')


const createPackageCustomer = async body => {
    try {
        const existPackage = await PackageCustomer.findOne({ name: body.name })
        if (existPackage) {
            return {
                message: 'Package already exist',
                success: false
            }
        }

        const newPackage = new PackageCustomer(body)
        await newPackage.save()

        return {
            message: 'Successfully create PackageCustomer',
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

const createPackageEnterprise = async body => {
    try {
        const existPackage = await PackageEnterprise.findOne({ name: body.name })
        if (existPackage) {
            return {
                message: 'Package already exist',
                success: false
            }
        }

        const newPackage = new PackageEnterprise(body)
        await newPackage.save()

        return {
            message: 'Successfully create PackageEnterprise',
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

const getPackageCustomer = async () => {
    try {
        const packageC = await PackageCustomer.find({})
        return {
            message: 'Successfully get PackageCustomer',
            success: true,
            data: packageC
        }
    } catch (err) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const getPackageEnterprise = async () => {
    try {
        const packageE = await PackageEnterprise.find({})
        return {
            message: 'Successfully get Package',
            success: true,
            data: packageE
        }
    } catch (err) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}



const updatePackageCustomer = async (id, body) => {
    try {
        const existPackage = await PackageCustomer.findOne({ _id: id })
        if (!existPackage) {
            return {
                message: 'Package not exist',
                success: false
            }
        }
        await PackageCustomer.updateOne({ _id: id }, body)
        return {
            message: 'Successfully update PackageCustomer',
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

const updatePackageEnterprise = async (id, body) => {
    try {
        const existPackage = await PackageEnterprise.findOne({ _id: id })
        if (!existPackage) {
            return {
                message: 'Package not exist',
                success: false
            }
        }
        await PackageEnterprise.updateOne({ _id: id }, body)
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

const deletePackageEnterprise = async id => {
    try {
        const existPackage = await PackageEnterprise.findOne({ _id: id })
        if (!existPackage) {
            return {
                message: 'Package not exist',
                success: false
            }
        }

        await PackageEnterprise.deleteOne({ _id: id })

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

const deletePackageCustomer = async id => {
    try {
        const existPackage = await PackageCustomer.findOne({ _id: id })
        if (!existPackage) {
            return {
                message: 'Package not exist',
                success: false
            }
        }

        await PackageCustomer.deleteOne({ _id: id })

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
    createPackageCustomer,
    createPackageEnterprise,
    getPackageCustomer,
    getPackageEnterprise,
    updatePackageCustomer,
    updatePackageEnterprise,
    deletePackageCustomer,
    deletePackageEnterprise

}