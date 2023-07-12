const Router = require('express')
const router = new Router()
const ingredientProductsController = require('../controllers/ingredientProductsController')

router.get('/getIngredientProductsByIngredientID', ingredientProductsController.getIngredientProductsByIngredientID)

module.exports = router