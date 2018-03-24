
import express from 'express'
let router = express.Router()

import UserModel from '../db/models/userModel'
import PostModel from '../db/models/postModel'

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


router.get('/', function(req, res) {

})

router.get('/:uuidUser', function(req, res) {
  res.send('A user')
})

router.get('/:uuidUser/posts/', function(req, res) {
  // TODO Quantum
})

router.get('/:uuidUser/posts/:uuidPost', function(req, res) {
  // TODO Quantum : validate if request user is authorized to view this post
})

module.exports = router
