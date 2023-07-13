const ApiError = require('../error/ApiError')
const {ProductOrders} = require('../models/models')

class ProductOrdersController {
    async getAllProductOrdersByOrderID(req, res, next) {
        try {
            const {id_order} = req.body
            const productOrders = await ProductOrders.findAll({where: {id_order: id_order}})
            return res.json(productOrders)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOneProductOrderByOrderIDAndProductID(req, res, next) {
        try {
            const {id_order, id_product} = req.body
            const productOrder = await ProductOrders.findOne({where: {id_order: id_order, id_product: id_product}})
            return res.json(productOrder)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOrderProductByOrderIDAndProductID(req, res, next) {
        try {
            const {id_order, id_product} = req.body
            const deleted = await ProductOrders.destroy({where: {id_order: id_order, id_product: id_product}})
            return res.json(deleted)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOrderProductByOrderID(req, res, next) {
        try {
            const {id_order} = req.body
            const deleted = await ProductOrders.describe({where: {id_order: id_order}})
            return res.json(deleted)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeCountByOrderIDAndProductID(req, res, next) {
        try {
            const {id_order, id_product, count} = req.body
            const updated = await ProductOrders.update({count: count}, {where: {id_order: id_order, id_product: id_product}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ProductOrdersController()