
import express from 'express'
let router = express.Router()
import models from '../db/models'
import utils from '../utils'
import jwt from 'jsonwebtoken'
//import auth from '../auth'

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

function formatRequest(req, handler) {
  let data = {}
  switch(handler) {
    case 'login':
      data.email = req.body.email
      data.password = req.body.password
      data.fields = req.query.fields
      break
    case 'register':
      data.user = req.body.user
      data.fields = req.query.fields
      break
  }

  return Object.assign({}, data)
}

router.post('/login', function(req, res) {

  //TODO :refactor in custom middleware
  let _req = utils.escapeRequest(req) 
  let {email, password, fields, ...out} = formatRequest(_req, 'login') 

  models.User.findOne(email, fields, (err, user) => {
    if(err) {
      res.status(400)
      res.json(utils.parseError(err, "Bad Parameters"))
    } else if (!user) {
      res.status(404)
      res.json(utils.parseError(true, "No user found"))
    } else {
      bcrypt.compare(password, user.password, (passErr, result) => {
        if(passErr || !result) {
          res.status(404)
          res.json(utils.parseError(true, "No user found"))
        } else {
          delete user.password
          res.status(200)
          res.json(utils.parsePayload('login', "login found", user)) //TODO : try to refactor this
        }
      })
    }
  })
})

// // define the login twitter strategy route
// router.get('/login-twitter', auth.authenticate('twitter', { failureRedirect: '/loginfailure' }), function(req, res) {
//   res.send('Connection Twitter')
// })
//
// router.get('/login-facebook', auth.authenticate('facebook', { failureRedirect: '/loginfailure' }), function(req, res) {
//   res.send('Connection Facebook')
// })

router.post('/register', function(req, res) {
  let _req = utils.escapeRequest(req) 
  let {user, fields, ...out} = formatRequest(_req, 'login') 

  if(user.password != user.password2) {
    res.status(400)
    res.json(utils.parseError(true, "Bad Request"))
  } else {
    delete user.password2
  }

  let docUser = new models.User(user)
  
  docUser.register((err, newUser) => {
    if(err) {
      //TODO : handle form error, serveur error and user already exists
      res.status(500)
      res.json(utils.parseError(true, "Server error"))
    } else {
      res.status(201)
      //TODO : create connexion token
      let token = jwt.sign({email:newUser.email, idUser:user.idUser}, env.JWT_SECRET);)
      res.json(utils.parsePayload('register', [newUser, token]))
    }
  })
})


router.post('/subscribe', function(req, res) {
  res.send('Subscription')
})

export default router
