const ApiError = require('../error/ApiError');
const {Products} = require('../models/models')


class ProductsController {
    async getProducts(req, res, next) {
        try {
            const products = await Products.findAll()
            return res.json({products})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getProductByID(req, res, next) {
        try {
            const {id} = req.body
            const product = await Products.findOne({where: {id}})
            return res.json({product})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeProductAvailabilityByID(req, res, next) {
        try {
            const {id, availability} = req.body
            const product = await Products.update({availability}, {where: {id}})
            return res.json({product})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ProductsController()
