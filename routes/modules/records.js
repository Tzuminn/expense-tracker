const express = require('express')
const router = express.Router()

// 引用 Record model
const Record = require('../../models/record')

// 新增頁面
router.get('/new', (req, res) => {
  return res.render('new')
})

// 新增功能


// 編輯頁面
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Todo.findOne({ _id, userId })
    .lean()
    .then(todo => res.render('edit', { record }))
    .catch(error => console.log(error))
})

// 編輯功能


// 刪除功能


module.exports = router