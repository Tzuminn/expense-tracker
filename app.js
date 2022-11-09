const express = require('express')
const exphbs = require('express-handlebars') 
const app = express()
const port = 3000

// 模板引擎
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 靜態檔案
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})