const Router = require('express')
const router = new Router()
const consoleUsersController = require('../controllers/ConsoleUsersController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', consoleUsersController.registration)
router.post('/login', consoleUsersController.login)
router.post('/auth', authMiddleware, consoleUsersController.check)

router.post('/getByID', consoleUsersController.getByID)
router.post('/getByPhone', consoleUsersController.getByPhone)
router.post('/getByEmail', consoleUsersController.getByEmail)
router.get('/getAll', consoleUsersController.getAll)

router.put('/changePhoneByPhone', consoleUsersController.changePhoneByPhone)
router.put('/changeEmailByPhone', consoleUsersController.changeEmailByPhone)
router.put('/changeSalary', consoleUsersController.changeSalary)

module.exports = router
