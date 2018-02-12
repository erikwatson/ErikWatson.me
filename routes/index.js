const express = require('express')
const router = express.Router()

function makeTitle (subtitle) {
  return `Erik Watson :: ${subtitle}`
}

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Erik Watson :: Video Game and Web Developer' })
})

router.get('/snowfall', (req, res, next) => {
  res.render('snowfall', { title: 'Erik Watson :: ' })
})

module.exports = router
