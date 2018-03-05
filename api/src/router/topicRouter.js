
import express from 'express'
let router = express.Router()

import TopicModel from '../db/TopicModel'

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function(req, res) {
  res.send('List of topics')
})
// define the about route
router.get('/:uuidTopic', function(req, res) {
  res.send('A topic')
})

module.exports = router
