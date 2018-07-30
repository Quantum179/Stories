import express from 'express'
let router = express.Router()

import AdminModel from '../db/models/adminModel'

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


router.post('/', function(req, res) {
  res.send('Login admin')
})

router.get('/dashboard', function(req, res) {
  res.send('Dashboard admin')
})

export default router
