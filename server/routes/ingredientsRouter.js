const Router = require('express')
const router = new Router()
const ingredientsController = require('../controllers/ingredientsController')

router.post('/createIngredient', ingredientsController.createIngredient)

router.get('/getIngredients', ingredientsController.getIngredients)

router.put('/changeIngredientCountByID', ingredientsController.changeById)

module.exports = router