const express = require('express')
const router = express.Router()

// 引用 Record model
const Record = require('../../models/record')

// 首頁
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router