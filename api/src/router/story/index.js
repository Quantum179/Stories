import express from 'express'
let router = express.Router()
import passport from '../../passport'
import {storyMiddleware, getStories, getStory, postStory, patchStory, deleteStory} from './handlers'
//TODO: try object destructing (import {...handlers} from handlers)

router.use(storyMiddleware)

router.get('/', getStories)
router.get('/:idStory', getStory)
router.post('/', passport.jwtAuth(), postStory)
router.patch('/:idStory', passport.jwtAuth(), patchStory)
router.delete('/:idStory', passport.jwtAuth(), deleteStory)

export default router
