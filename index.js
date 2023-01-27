const express = require('express')
const authModule = require('./src/auth/auth.module')

const app = express()

const router = express.Router()

router.use('/auth', authModule)

app.use('/api', router)

// export 'app'
module.exports = app