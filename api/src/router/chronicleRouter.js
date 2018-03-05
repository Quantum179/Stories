import express from 'express'
let router = express.Router()

// define the home page route
router.get('/', function(req, res) {
  res.send('List of chronicles')
})
// define the about route
router.get('/:uuidChronicle', function(req, res) {
  res.send('A Chronicle')
})

module.exports = router
