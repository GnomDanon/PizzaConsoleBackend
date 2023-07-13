const Router = require('express')
const router = new Router()
const ingredientProductsController = require('../controllers/ingredientProductsController')

router.post('/getIngredientProductsByIngredientID', ingredientProductsController.getIngredientProductsByIngredientID)

module.exports = router