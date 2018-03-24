
import express from 'express'
let router = express.Router()
//import auth from '../auth'

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/login', function(req, res) {
  res.send('Connexion normale')
})

// // define the login twitter strategy route
// router.get('/login-twitter', auth.authenticate('twitter', { failureRedirect: '/loginfailure' }), function(req, res) {
//   res.send('Connection Twitter')
// })
//
// router.get('/login-facebook', auth.authenticate('facebook', { failureRedirect: '/loginfailure' }), function(req, res) {
//   res.send('Connection Facebook')
// })

router.get('/signup', function(req, res) {
  res.send('Inscription')
})


router.get('/subscribe', function(req, res) {
  res.send('Subscription')
})

export default router
