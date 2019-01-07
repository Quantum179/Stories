import express from 'express'
let router = express.Router()

import chatRouter from './user'
import gameRouter from './story'
import readingRouter from './author'

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/stories', storyRouter)
router.use('/chronicles', chronicleRouter)
router.use('/blog', blogRouter)
router.use('/mag', magRouter)
router.use('/authors', authorRouter)

export default router
