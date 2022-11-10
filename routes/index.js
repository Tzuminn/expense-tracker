const express = require('express')
const router = express.Router()

// 載入模組
const home = require('./modules/home')
const records = require('./modules/records')
const users = require('./modules/users')
const auth = require('./modules/auth')

// 掛載middleware
const { authenticator } = require('../middleware/auth')

// 導向相對模組
router.use('/records', authenticator, records)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home)

// 匯出路由器
module.exports = router