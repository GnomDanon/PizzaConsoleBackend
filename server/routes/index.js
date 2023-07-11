const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const promotionsRouter = require('./promotionsRouter')
const productsRouter = require('./productsRouter')
//const Router = require('./Router')

router.use('/user', userRouter)
router.use('/promotions', promotionsRouter)
router.use('/products', productsRouter)
//router.use('/', Router)

module.exports = router
