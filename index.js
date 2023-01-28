// noinspection JSCheckFunctionSignatures

require('dotenv').config()
const express = require('express')
const authModule = require('./src/auth/auth.module')
const globalConfig = require('./src/config/env')
const passport = require("passport");

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())

const router = express.Router()

router.use('/auth', authModule)
router.use(passport.authenticate('jwt', { session: false }))

app.use('/api', router)

if (globalConfig.nodeEnv !== 'test') app.listen(globalConfig.port, () => console.log(`Server is running on port ${globalConfig.port}`))

module.exports = app