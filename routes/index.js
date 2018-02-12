const express = require('express')
const router = express.Router()

function makeTitle (subtitle) {
  return `Erik Watson :: ${subtitle}`
}

router.get('/', (req, res, next) => {
  res.render('index', { title: makeTitle('Video Game and Web Developer') })
})

router.get('/snowfall', (req, res, next) => {
  res.render('snowfall', { title: makeTitle('snowfall.js') })
})

module.exports = router
