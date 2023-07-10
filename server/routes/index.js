const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
//const Router = require('./Router')
//const Router = require('./Router')
//const Router = require('./Router')

router.use('/user', userRouter)
//router.use('/', Router)
//router.use('/', Router)
//router.use('/', Router)

module.exports = router
