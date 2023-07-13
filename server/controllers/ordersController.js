const ApiError = require('../error/ApiError')
const {Orders} = require('../models/models')

class OrdersController {
    async getAllOrders(req, res, next) {
        try {
            const orders = await Orders.findAll()
            return res.json(orders)
        } catch (e) {
            next(ApiError.badRequest(e.message)) 
        }
    }

    async getOneOrderByID(req, res, next) {
        try {
            const {id} = req.body
            const order = await Orders.findOne({where: {id: id}})
            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeStatusByID(req, res, next) {
        try {
            const {id, status} = req.body
            const updated = await Orders.update({status: status}, {where: {id: id}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new OrdersController()