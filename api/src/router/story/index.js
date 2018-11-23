import express from 'express'
let router = express.Router()
import {jwtAuth} from '../../passport'

import {getHome, getStories, getStory, postStory, patchStory, deleteStory, tesr} from './handlers'

// public routes
router.get('/test', tesr)
router.get('/home', getHome)
router.get('/', getStories)

// protected routes
router.get('/:id', jwtAuth('USER'), getStory) 
router.post('/', jwtAuth('AUTHOR'), postStory)
router.patch('/:id', jwtAuth('IDENTITY', 'REVIEWER'), patchStory)
router.delete('/:id', jwtAuth('ADMIN'), deleteStory)



export default router