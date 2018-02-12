const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('snowfall', { title: 'Erik Watson :: snowfall.js' })
})

module.exports = router
