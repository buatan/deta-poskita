const express = require('express')
const AuthController = require('./auth.controller')

const router = express.Router()
const authController = new AuthController()

router.post('/local', authController.login)

module.exports = router