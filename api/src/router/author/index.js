import express from 'express'
let router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

// define the home page route
router.get('/', function(req, res) {
  res.send('List of authors')
})

router.get('/analytics/', function(req, res) {
  res.send('analytics endpoint')
})

router.get('/:idAuthor', function(req, res) {
  res.send('A author')
})

router.get('/:idAuthor/posts/', function(req, res) {
  // Just an example, it's not currently working
  AuthorModel.findPosts(req.body.uuidPost).exec(function(err, result) {
    if(err) {
      res.status = 500
      res.json({err: err})
    } else {
      res.status = 200
      res.json(result.posts)
    }
  })
})

router.get('/search', function(req, res) {
  res.send('search option')
})

export default router
