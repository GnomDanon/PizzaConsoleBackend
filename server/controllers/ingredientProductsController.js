const ApiError = require('../error/ApiError')
const {IngredientProducts} = require('../models/models')

class IngredientProductsController {
    async getIngredientProductsByIngredientID(req, res, next) {
        try {
            const {id_ingredient} = req.body
            const ingredientProducts = await IngredientProducts.findAll({where: {id_ingredient: id_ingredient}})
            return res.json(ingredientProducts)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new IngredientProductsController()