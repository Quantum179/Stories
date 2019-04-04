import express from 'express'
let router = express.Router()

import { authGuard } from '../../passport'
import { AUTHOR, IDENTITY, ADMIN } from '../../passport/roles'

import {getHome, getStories, getStory, postStory, patchStory, deleteStory} from './handlers'

// public routes
router.get('/home', getHome)
router.get('/', getStories)

// protected routes
router.get('/:id', authGuard(), getStory) 
router.post('/', authGuard(AUTHOR), postStory)
router.patch('/:id', authGuard(IDENTITY), patchStory)
router.delete('/:id', authGuard(ADMIN), deleteStory)

export default router