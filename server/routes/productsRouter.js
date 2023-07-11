const Router = require('express')
const router = new Router()
const promotionsController = require('../controllers/productsController')

router.get('/getProducts', promotionsController.getProducts)
router.get('/getProductByID', promotionsController.getProductByID)
router.put('/changeProductAvailabilityByID', promotionsController.changeProductAvailabilityByID)

module.exports = router
