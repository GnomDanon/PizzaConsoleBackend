const Router = require('express')
const router = new Router()
const chefsController = require('../controllers/chefsController')

router.get('/getAllChefs', chefsController.getChefs)

module.exports = router