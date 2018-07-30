import userRouter from './user'
import storyRouter from './story'
import authorRouter from './author'
import authRouter from './auth'
import chronicleRouter from './chronicle'
import magRouter from './mag'
import blogRouter from './blog'
//import postRouter from './postRouter'
import { Router } from 'express'

export default class AppRouter extends Router {
  constructor(app) {
      super()

      app.use('/auth', authRouter)
      app.use('/users', userRouter)
      app.use('/stories', storyRouter)
      app.use('/chronicles', chronicleRouter)
      app.use('/blog', blogRouter)
      app.use('/mag', magRouter)
      app.use('/authors', authorRouter)
      //app.use('/posts', postRouter)
  }
}
