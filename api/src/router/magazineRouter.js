import express from 'express'
let router = express.Router()


router.get('/', function(req, res) {
  res.send('Home magazine')
})


router.get('/:idMagNumber', function(req, res) {
  res.send('A MagNumber')
})

export default router
