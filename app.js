const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const flash = require('connect-flash')

const dateFormat = require('./utility/time')
const Icon = require('./utility/icon')

// 如果是在正式環境中執行，就讀取env檔案
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// 路由及連線
const routes = require('./routes')
require('./config/mongoose')

const usePassport = require('./config/passport')

const app = express()
const port = process.env.PORT

// 模板引擎
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

// body-parser
app.use(express.urlencoded({ extended: true }))

// method-override
app.use(methodOverride('_method'))

// 靜態檔案
app.use(express.static('public'))

// passport
usePassport(app)
// flash
app.use(flash())

// 本地變數
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

// 路由器
app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})