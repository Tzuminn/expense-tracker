const express = require('express')
const router = express.Router()

// 載入模組
const home = require('./modules/home')
const records = require('./modules/records')

// 導向相對模組
router.use('/', home)
router.use('/records', records)

// 匯出路由器
module.exports = router