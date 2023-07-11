const ApiError = require('../error/ApiError');
const {Promotions} = require('../models/models')


class PromotionsController {
    async getPromotions(req, res, next) {
        try {
            const promotions = await Promotions.findAll()
            return res.json({promotions})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changePromotionNameByID(req, res, next) {
        try {
            const {id, newName} = req.body
            const promotion = await Promotions.update({title:newName}, {where: {id}})
            return res.json({promotion})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changePromotionDescriptionByID(req, res, next) {
        try {
            const {id, newDescription} = req.body
            const promotion = await Promotions.update({description:newDescription}, {where: {id}})
            return res.json({promotion})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new PromotionsController()
