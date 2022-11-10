const express = require('express')
const router = express.Router()
const passport = require('passport')

// 向Facebook發出請求
router.get('/facebook', passport.authenticate('facebook', {
  scope: ['email', 'public_profile']  // 要求的資料
}))

// Facebook 把資料發回來的地方
router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

module.exports = router