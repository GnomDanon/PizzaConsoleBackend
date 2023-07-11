const Router = require('express')
const router = new Router()
const couriersController = require('../controllers/couriersController')

router.get('/getAllCouriers', couriersController.getCouriers)

module.exports = router