const express = require('express')
const router = express.Router()

// 引用 Record model
const Record = require('../../models/record')

// 首頁
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.log(error))
})

module.exports = router