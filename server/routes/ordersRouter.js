const Router = require('express')
const router = new Router()
const ordersController = require('../controllers/ordersController')

router.get('/getAllOrders', ordersController.getAllOrders)
router.post('/getOneOrderByID', ordersController.getOneOrderByID)

router.put('/changeStatucByID', ordersController.changeStatusByID)

module.exports = router