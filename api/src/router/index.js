
import userRouter from './userRouter'
import storyRouteur from './storyRouter'
import adminRouter from './adminRouter'
import authorRouter from './authorRouter'
import authRouter from './authRouter'
import storyRouter from './storyRouter'
import chronicleRouter from './chronicleRouter'
import magazineRouter from './magazineRouter'
import blogRouter from './blogRouter'

//import juryRouter from './juryRouter'
//import postRouter from './postRouter'

// TODO Quantum : declare sanitazer middleware

// router.js export
export default class Router {

  constructor(app, ...models) {

      //app.use('/auth', authRouter)

      // TODO Quantum : find a way to organize all requests on admin, author and reporter collections inside postRouter
      app.use('/admin', adminRouter)
      app.use('/users', userRouter)
      app.use('/authors', authorRouter)
      //app.use('/reporters', reporterRouter)
      //app.use('jury', juryRouter)
      //app.get('/authors/:uuidAuthor')
      //app.get('/users/:uuidAuthor/posts/')
        //app.get('/users/:uuidAuthor/novels/')
        //app.get('/users/:uuidAuthor/articles/')
      //app.get('/users/:uuidAuthor/posts/:uuidPost')
      //app.get('/users/:uuidAuthor/posts/:uuidPost/comments/')

      // TODO Quantum : find a way to organize all requests on novel, story and chronicle collections inside postRouter

      //app.use('/posts', postRouter)

      app.use('/stories', storyRouter)
      app.use('/chronicles', chronicleRouter)
      app.use('/magazine', magazineRouter)

      // TODO Quantum : add articles and topics routes in blog route
      app.use('/blog', blogRouter)

      //app.use('/topics', topicRouter)



  }
}
