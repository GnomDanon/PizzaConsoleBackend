const Router = require('express')
const router = new Router()
const consoleUsersController = require('../controllers/ConsoleUsersController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', consoleUsersController.registration)
router.post('/login', consoleUsersController.login)
router.get('/auth', authMiddleware, consoleUsersController.check)
router.get('/getByID', consoleUsersController.getByID)
router.get('/getByPhone', consoleUsersController.getByPhone)
router.get('/getByEmail', consoleUsersController.getByEmail)
router.get('/getAll', consoleUsersController.getAll)
router.put('/changePhoneByPhone', consoleUsersController.changePhoneByPhone)
router.put('/changeEmailByPhone', consoleUsersController.changeEmailByPhone)
router.put('/changeSalary', consoleUsersController.changeSalary)

module.exports = router
