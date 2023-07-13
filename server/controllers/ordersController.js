const ApiError = require('../error/ApiError')
const {Orders, ProductOrders, IngredientProducts, Ingredients} = require('../models/models')

const dictionary = {}

async function processIngredientProduct(ingredientProduct, product_count) {
    const ingredient_count = ingredientProduct['count']
    const ingredient = await Ingredients.findOne({where: {id: ingredientProduct['id_ingredient']}})
    dictionary[ingredient['id']] = dictionary[ingredient['id']] - ingredient_count * product_count
    await Ingredients.update({count: dictionary[ingredient['id']]}, {where: {id: ingredient['id']}})
}

async function processProductOrder(productOrder) {
    const id_product = productOrder['id_product']
    const product_count = productOrder['count']
    const ingredientProducts = await IngredientProducts.findAll({where: {id_product: id_product}})
    ingredientProducts.forEach(ingredientProduct => {
        processIngredientProduct(ingredientProduct, product_count)
    })
}

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
<<<<<<< HEAD
            const ingredients = await Ingredients.findAll()
            ingredients.forEach(ingredient => {
                dictionary[ingredient['id']] = ingredient['count']
            }) 
            if (status == "Готовится" || status == "готовится") {
                const productOrders = await ProductOrders.findAll({where: {id_order: id}})
                productOrders.forEach(productOrder => {
                    processProductOrder(productOrder)
                })
            }
=======
>>>>>>> 9b8d8cdc9c2aee5c022ccf072e693f9d24fefba0
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new OrdersController()