import express from 'express'
let router = express.Router()

// define the home page route
router.get('/', function(req, res) {
  res.send('List of posts')
})
// define the about route
router.get('/:idChronicle', function(req, res) {
  res.send('A Chronicle')
})

export default router
