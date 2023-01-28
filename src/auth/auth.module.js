const express = require('express')
const AuthController = require('./auth.controller')

const router = express.Router()
const authController = new AuthController()

router.post('/local', authController.login)
router.post('/local/register', authController.register)

module.exports = router