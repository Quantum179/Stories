
import express from 'express'
let router = express.Router()
import services from '../services'
import auth from '../auth'

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the login twitter strategy route
router.get('/login/twitter', auth.authenticate('twitter', { failureRedirect: '/loginfailure' }), function(req, res) {
  res.send('Connection Twitter')
})

router.get('/login/facebook', auth.authenticate('facebook', { failureRedirect: '/loginfailure' }), function(req, res) {
  res.send('Connection Facebook')
})

// define the signup page route
router.get('/signup', function(req, res) {
  res.send('Inscription')
})
// define the about route
router.get('/subscribe', function(req, res) {
  res.send('Subscription')
})

module.exports = router
