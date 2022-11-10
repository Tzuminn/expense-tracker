module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {   // 回傳request的登入狀態
      return next()                // true => 進入下一個middleware
    }
    res.redirect('/users/login')   // false => 強制返回login頁面
  }
}