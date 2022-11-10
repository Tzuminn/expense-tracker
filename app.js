const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

// 路由及連線
const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

// 模板引擎
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// body-parser
app.use(express.urlencoded({ extended: true }))

// method-override
app.use(methodOverride('_method'))

// 靜態檔案
app.use(express.static('public'))

// 路由器
app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})