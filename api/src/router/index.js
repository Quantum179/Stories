
import userRouter from './userRouter'
import adminRouter from './adminRouter'
import authorRouter from './authorRouter'
import authRouter from './authRouter'


// router.js export
export default class Router {

  constructor(app) {

      app.use('/auth', authRouter)

      // TODO Quantum : find a way to organize all requests on admin, author and reporter collections inside postRouter
      app.use('/users', userRouter)
      app.use('/admin', adminRouter)
      app.use('/authors', authorRouter)
      app.use('/reporters', reporterRouter)
      app.use('jury', juryRouter)
      //app.get('/authors/:uuidAuthor')
      //app.get('/users/:uuidAuthor/posts/')
        //app.get('/users/:uuidAuthor/novels/')
        //app.get('/users/:uuidAuthor/articles/')
      //app.get('/users/:uuidAuthor/posts/:uuidPost')
      //app.get('/users/:uuidAuthor/posts/:uuidPost/comments/')

      // TODO Quantum : find a way to organize all requests on novel, story and chronicle collections inside postRouter
      app.use('/posts', postRouter)

      app.use('/novels', novelRouter)
      app.use('/stories', storyRouter)
      app.use('/chronicles', chronicleRouter)

      app.use('/magazine', magazineRouter)
      app.use('/articles', articleRouter)

      app.use('/topics', topicRouter)
      //app.use('/comments', commentRouter)


  }
}
