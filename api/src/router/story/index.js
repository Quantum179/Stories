import express from 'express'
let router = express.Router()
import {jwtAuth} from '../../passport'

import {getStories, getStory, postStory, patchStory, deleteStory} from './handlers'

router.get('/', getStories)
router.get('/:id', jwtAuth('USER'), getStory)
router.post('/', jwtAuth('AUTHOR'), postStory)
router.patch('/:id', jwtAuth('IDENTITY', 'REVIEWER'), patchStory)
router.delete('/:id', jwtAuth('ADMIN'), deleteStory)

export default router