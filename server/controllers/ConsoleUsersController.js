const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {ConsoleUsers} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class ConsoleUsersController {
    async registration(req, res, next) {
        try {
            const {first_name, surname, middle_surname, phone, email, password} = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Некорректный email или password'))
            }
            const candidate = await ConsoleUsers.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await ConsoleUsers.create({first_name, surname, middle_surname, phone, email, hashed_password: hashPassword})
            const token = generateJwt(user.id, user.email)
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
}

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const user = await ConsoleUsers.findOne({where: {email}})
            if (!user) {
                return next(ApiError.internal('Пользователь не найден'))
            }
            let comparePassword = bcrypt.compareSync(password, user.hashed_password)
            if (!comparePassword) {
                return next(ApiError.internal('Указан неверный пароль'))
            }
            const token = generateJwt(user.id, user.email)
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async check(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.email)
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getByID(req, res, next){
        try {
            const {id} = req.body
            const user = await ConsoleUsers.findOne({where: {id}})
            if (!user) {
                return next(ApiError.internal('Пользователь не найден'))
            }
            user.hashed_password=''
            return res.json({user})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getByPhone(req, res, next){
        try {
            const {phone} = req.body
            const user = await ConsoleUsers.findOne({where: {phone}})
            if (!user) {
                return next(ApiError.internal('Пользователь не найден'))
            }
            user.hashed_password=''
            return res.json({user})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getByEmail(req, res, next){
        try {
            const {email} = req.body
            const user = await ConsoleUsers.findOne({where: {email}})
            if (!user) {
                return next(ApiError.internal('Пользователь не найден'))
            }
            user.hashed_password=''
            return res.json({user})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changePhoneByPhone(req, res, next){
        try {
            const {oldPhone, newPhone} = req.body
            const user = await ConsoleUsers.update({phone:newPhone}, {where: {phone:oldPhone}})
            return res.json({user})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeEmailByPhone(req, res, next){
        try {
            const {phone, newEmail} = req.body
            const user = await ConsoleUsers.update({email:newEmail}, {where: {phone:phone}})
            return res.json({user})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ConsoleUsersController()
