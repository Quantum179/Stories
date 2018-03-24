
import express from 'express'
let router = express.Router()
//import auth from '../auth'

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function(req, res) {
  res.send('List of stories')
})

router.get('/:idStory', function(req, res) {
  
})

router.post('/', function(req, res) {
  res.send('Story added')
})


export default router
