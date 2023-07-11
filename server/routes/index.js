const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const promotionsRouter = require('./promotionsRouter')
const productsRouter = require('./productsRouter')
const productOrdersRouter = require('./productOrdersRouter')
const ordersRouter = require('./ordersRouter')
const ingredientsRouter = require('./ingredientsRouter')
const ingredientProductsRouter = require('./ingredientProductsRouter')
const couriersRouter = require('./couriersRouter')
const chefsRouter = require('./chefsRouter')
const addressRouter = require('./addressRouter')

router.use('/user', userRouter)
router.use('/promotions', promotionsRouter)
router.use('/products', productsRouter)
router.use('/productOrders', productOrdersRouter)
router.use('/orders', ordersRouter)
router.use('/ingredients', ingredientsRouter)
router.use('/ingredientProducts', ingredientProductsRouter)
router.use('/couriers', couriersRouter)
router.use('/chefs', chefsRouter)
router.use('/address', addressRouter)

module.exports = router
