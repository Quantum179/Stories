import express from 'express'
let router = express.Router()

// Get Saturn's chronicles home page news and a list of latest chronicles
router.get('/', function(req, res) {
  res.send('List of chronicles')
})
// define the about route
router.get('/:idChronicle', function(req, res) {
  res.send('A Chronicle')
})

export default router
