const ApiError = require('../error/ApiError');
const {Address} = require('../models/models')

class AddressController {
    async getAdressByID(req, res, next) {
        try {
            const {id} = req.body
            const address = await Address.findOne({where: {id: id}})
            return res.json(address)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAdressByUserID(req, res, next) {
        try {
            const {id_user} = req.body
            const address = await Address.findOne({where: {id_user: id_user}})
            return res.json(address)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new AddressController()