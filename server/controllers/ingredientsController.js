const ApiError = require('../error/ApiError')
const {Ingredients} = require('../models/models')

class IngredientsController {
    async createIngredient(req, res, next) {
        try {
            const {title, count} = req.body
            const ingredient = Ingredients.create({title, count})
            return res.json(ingredient)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getIngredients(req, res, next) {
        try {
            const ingredients = await Ingredients.findAll()
            return res.json(ingredients)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeById(req, res, next) {
        try {
            const {delta_count, id} = req.body
            const ingredient = await Ingredients.findOne({where: {id: id}})
            let new_count = ingredient['count'] + delta_count
            const updated = await Ingredients.update({count: new_count}, {where: {id: id}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeMininmumCountByID(req, res, next){
        try {
            const {id, minimum_count} = req.body
            const updated = await Ingredients.update({minimum_count}, {where: {id}})
            return res.json({updated})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new IngredientsController()