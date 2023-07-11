const ApiError = require('../error/ApiError')
const {Couriers} = require('../models/models')

class CouriersController {
    async getCouriers(req, res, next) {
        try {
            const couriers = await Couriers.findAll()
            return res.json(couriers)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new CouriersController()