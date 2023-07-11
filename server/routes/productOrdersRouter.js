const Router = require('express')
const router = new Router()
const productOrderController = require('../controllers/productOrdersController')

router.get('/getAllProductOrdersByOrderID', productOrderController.getAllProductOrdersByOrderID)
router.get('/getOneProductOrderByOrderIDAndProductID', productOrderController.getOneProductOrderByOrderIDAndProductID)

router.delete('/deleteOneProductOrderByOrderIdAndProductID', productOrderController.deleteOrderProductByOrderIDAndProductID)
router.delete('/deleteProductOrdersByOrderID', productOrderController.deleteOrderProductByOrderID)

router.put('/changeCountByOrderIDAndProductID', productOrderController.changeCountByOrderIDAndProductID)

module.exports = router