const ApiError = require('../error/ApiError')
const {Ingredients} = require('../models/models')

class IngredientsController {
    async createIngredient(req, res, next) {
        try {
<<<<<<< HEAD
            const {title, count} = req.body
            const ingredient = await Ingredients.create({title, count})
=======
            const {title, count, minimum_count} = req.body
            const ingredient = Ingredients.create({title, count, minimum_count})
>>>>>>> 9b8d8cdc9c2aee5c022ccf072e693f9d24fefba0
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

    async checkAllIngredientsCount(req, res, next){
        try {
            const ingredients = await Ingredients.findAll()
            let alerts = Array()
            ingredients.forEach(el => {
                if(el.count < el.minimum_count) {
                    alerts += el.id + [' ']
                }
                });
            return res.json({alerts})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


}

module.exports = new IngredientsController()