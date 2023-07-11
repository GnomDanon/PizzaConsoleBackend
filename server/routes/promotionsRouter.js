const Router = require('express')
const router = new Router()
const promotionsController = require('../controllers/promotionsController')

router.get('/getPromotions', promotionsController.getPromotions)
router.put('/changePromotionNameByID', promotionsController.changePromotionNameByID)
router.put('/changePromotionDescriptionByID', promotionsController.changePromotionDescriptionByID)

module.exports = router
