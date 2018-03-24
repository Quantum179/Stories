import express from 'express'
let router = express.Router()


router.get('/', function(req, res) {
  res.send('List of reporters')
})


router.get('/:idReporter', function(req, res) {
  res.send('A Reporter')
})

export default router
