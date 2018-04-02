
import userRouter from './userRouter'
import storyRouteur from './storyRouter'
import adminRouter from './adminRouter'
import authorRouter from './authorRouter'
import authRouter from './authRouter'
import storyRouter from './storyRouter'
import chronicleRouter from './chronicleRouter'
import magazineRouter from './magazineRouter'
import blogRouter from './blogRouter'

import { Router } from 'express'



//import juryRouter from './juryRouter'
//import postRouter from './postRouter'


// TODO Quantum : declare sanitazer middleware

// router.js export
export default class AppRouter extends Router {

  constructor(app) {
      super()

      //app.use('/auth', authRouter)

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

      //app.use('/posts', postRouter)

      app.use('/stories', storyRouter)
      app.use('/chronicles', chronicleRouter)

      // TODO Quantum : add articles and topics routes in blog route
      app.use('/blog', blogRouter)
      app.use('/magazine', magazineRouter)

      //app.use('/topics', topicRouter)



  }
}
