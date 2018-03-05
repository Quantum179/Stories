import express from 'express'
let router = express.Router()


// define the home page route
router.get('/', function(req, res) {
  res.send('List of posts')
})
// define the about route
router.get('/:uuidPost', function(req, res) {
  res.send('A post')
})

module.exports = router
