const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/getByID', userController.getByID)
router.get('/getByPhone', userController.getByPhone)
router.get('/getByEmail', userController.getByEmail)
router.put('/changePhoneByPhone', userController.changePhoneByPhone)
router.put('/changeEmailByPhone', userController.changeEmailByPhone)

module.exports = router
