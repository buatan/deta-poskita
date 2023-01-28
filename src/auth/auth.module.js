const express = require('express')
const AuthController = require('./auth.controller')

const router = express.Router()
const authController = new AuthController()

router.post('/local', (req, res) => authController.login(req, res))
router.post('/local/register', (req, res) => authController.register(req, res))

module.exports = router