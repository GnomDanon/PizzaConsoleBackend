const Router = require('express')
const router = new Router()
const ordersController = require('../controllers/ordersController')

router.get('/getAllOrders', ordersController.getAllOrders)
router.post('/getOneOrderByID', ordersController.getOneOrderByID)
<<<<<<< HEAD

router.put('/changeStatusByID', ordersController.changeStatusByID)
=======
router.put('/changeStatucByID', ordersController.changeStatusByID)
>>>>>>> 9b8d8cdc9c2aee5c022ccf072e693f9d24fefba0

module.exports = router