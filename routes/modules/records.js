const express = require('express')
const router = express.Router()

// 引用 Record model
const Record = require('../../models/record')

// 新增頁面
router.get('/new', (req, res) => {
  return res.render('new')
})

// 新增功能
router.post('/', (req, res) => {
  const userId = req.user._id
  const {
    name,
    date,
    category,
    amount,
  } = req.body

  Record.create({ 
    name,
    date,
    category,
    amount,
    userId
  })
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

// 編輯頁面
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .lean()
    .then(record => res.render('edit', { record }))
    .catch(error => console.log(error))
})

// 編輯功能
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const recordsInfo = req.body
  return Record.findByIdAndUpdate({ _id, userId }, recordsInfo)
    .lean()
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 刪除功能
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router