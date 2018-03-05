import express from 'express'
let router = express.Router()

import AdminModel from '../../db/adminModel'

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function(req, res) {
  res.send('List of posts')
})
// define the about route
router.get('/:uuidPost', function(req, res) {
  res.send('A post')
})

module.exports = router
