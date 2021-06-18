const ProductType = require('../models/ProductType')


const getAllProductType = async () => {
	try {
		const product = await ProductType.find({})
		return {
			message: 'Successfully get PackageCustomer',
			success: true,
			data: product
		}
	} catch (err) {
		return {
			message: 'An error occurred',
			success: false
		}
	}
}

const createProductType = async body => {
	try {
		const existProduct = await ProductType.findOne({ ProductType: body.ProductType })
		if (existProduct) {
			return {
				message: 'Product already exist',
				success: false,
				data: newProduct
			}
		}

		const newProduct = new ProductType(body)
		await newProduct.save()
		return {
			message: 'Successfully create product type',
			success: true,
			data: newProduct
		}
	} catch (error) {
		return {
			message: 'An error occurred',
			success: false
		}
	}
}


const updateProductType = async (id, body) => {
	try {
		//const newProduct = new Product(body)
		const existProduct = await ProductType.findOne({ _id: id })
		if (!existProduct) {
			return {
				message: 'Product not exist',
				success: false
			}
		}
		await ProductType.updateOne({ _id: id }, body)
		return {
			message: 'Successfully update product',
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

const deleteProductType = async id => {
	try {
		const existProduct = await ProductType.findOne({ _id: id })
		if (!existProduct) {
			return {
				message: 'Product not exist',
				success: false
			}
		}

		await ProductType.deleteOne({ _id: id })

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
	createProductType,
	getAllProductType,
	updateProductType,
	deleteProductType
}
