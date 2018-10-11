import express from 'express'
let router = express.Router()

import userRouter from './user'
import storyRouter from './story'
import authorRouter from './author'
import authRouter from './auth'
import chronicleRouter from './chronicle'
import magRouter from './mag'
import blogRouter from './blog'

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/stories', storyRouter)
router.use('/chronicles', chronicleRouter)
router.use('/blog', blogRouter)
router.use('/mag', magRouter)
router.use('/authors', authorRouter)

export default router
