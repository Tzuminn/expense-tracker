const express = require('express')
const router = express.Router()

// 登入頁面
router.get('/login', (req, res) => {
  res.render('login')
})

// 登入功能

// 註冊頁面

// 註冊功能

// 登出功能

module.exports = router