const ApiError = require('../error/ApiError')
const {Chefs} = require('../models/models')

class ChefsController {
    async getChefs(req, res, next) {
        try {
            const chefs = await Chefs.findAll()
            return res.json(chefs)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ChefsController()