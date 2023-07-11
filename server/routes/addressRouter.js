const Router = require('express')
const router = new Router()
const addressController = require('../controllers/addressController')

router.get('/getAddressByID', addressController.getAdressByID)
router.get('/getAddressByUserID', addressController.getAdressByUserID)

module.exports = router