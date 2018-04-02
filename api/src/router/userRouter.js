
import express from 'express'
let router = express.Router()

import models from '../db/models'

import utils from '../utils'

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  //console.log('Time: ', Date.now())

  next()
})


router.get('/', function(req, res) {
  req = utils.validateRequest(req)
  //TODO Quantum : filter req.body
  models.User.getUsers(null, (err, users) => {
    if(err) {
      res.status(500)
      res.json(utils.parseError(err, "Server Error"))
    } else if (!users){
      res.status(404)
      res.json(utils.parseError(true, "No user found"))
    } else {
      res.status(200)
      res.json(utils.parsePayload('users', users.length + ' users found', users))
    }
  })
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
