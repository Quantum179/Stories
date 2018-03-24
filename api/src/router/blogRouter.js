import express from 'express'
let router = express.Router()

// define the home page route
router.get('/', function(req, res) {
  res.send('Blog home')
})
// define the about route
router.get('/topics/', function(req, res) {
  res.send('List of topics')
})

router.get('/topics/:idArticle', function(req, res) {
  res.send('A article')
})

export default router
