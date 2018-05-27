import express from 'express'
let router = express.Router()
import models from '../db/models'
import utils from '../utils'

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  //console.log('Time: ', Date.now())

  next()
})

function formatRequest(req, handler) {
  let data = {}

  switch(handler) {
    case 'get-users':
      data.query = req.query.query
      data.fields = req.query.fields
      break
    case 'get-user':
      data.id = req.params.idUser
      data.fields = req.query.fields
      break;
  }

  return Object.assign({}, data)
}



router.get('/', function(req, res) {

  //TODO :refactor in custom middleware
  let _req = utils.escapeRequest(req) 
  let {query, fields, ...out} = formatRequest(_req, 'get-users') 
  
  models.User.findMany(query, fields, (err, users) => {
    if(err) {
      res.status(400)
      res.json(utils.parseError(err, "Bad Parameters"))
    } else if (!users || users.length == 0) {
      res.status(404)
      res.json(utils.parseError(true, "No user found"))
    } else {
      res.status(200)
      res.json(utils.parsePayload('users', users.length + ' users found', users)) //TODO : try to refactor this
    }
  })
})

router.get('/:idUser', function(req, res) {

  //TODO :refactor in custom middleware
  let _req = utils.escapeRequest(req) 
  let {id, fields, ...out} = formatRequest(_req, 'get-user') 

  models.User.findById(id, fields, (err, user) => {
    if(err) {
      res.status(400)
      res.json(utils.parseError(err, "Bad Parameters"))
    } else if (!user) {
      res.status(404)
      res.json(utils.parseError(true, "No user found"))
    } else {
      res.status(200)
      res.json(utils.parsePayload('user', 'User found', user)) //TODO : try to refactor this
    }
  })
})

router.get('/:idUser/posts/', function(req, res) {
  // TODO Quantum
})

router.get('/:idUser/posts/:idPost', function(req, res) {
  // TODO Quantum : validate if request user is authorized to view this post
})

module.exports = router
