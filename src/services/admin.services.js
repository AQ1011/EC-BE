const USER = require('../models/User')
const ENTERPRISE = require('../models/Enterprise')
var mongo = require('mongodb');

const getAllCustomer = async () => {
    try {
        const users = await USER.find({})
        return {
            message: 'Successfully get all users',
            success: true,
            data: users
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const getAllEnterprise = async () => {
    try {
        const users = await ENTERPRISE.find({})
        return {
            message: 'Successfully get all enterprise',
            success: true,
            data: users
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const updateUser = async (id, body) => {
    try {
        await USER.updateOne({ _id: id }, body)

        return {
            message: 'Successfully update user',
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

const getUser = async (id) => {
    try {    
        const user = await USER.findOne({ _id: id})
        return {
            message: 'Successfully get user',
            success: true,
            data: user
        }
    } catch (error) {
        return {
            message: 'An error occurred' + error.message,
            success: false
        }
    }
}


const deleteUser = async (id) => {
    try {
        await USER.deleteOne({ _id: id })

        return {
            message: 'Successfully delete product',
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
    getAllCustomer,
    getAllEnterprise,
    deleteUser,
    getUser
}