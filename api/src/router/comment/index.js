import express from 'express'
let router = express.Router()

import { authGuard } from '../../passport'
import { IDENTITY, ADMIN, USER } from '../../passport/roles'

import {getComments, getComment, postComment, patchComment, deleteComment} from './handlers'

// public routes
router.get('/', getComments)
router.get('/:id', getComment)
router.post('/', postComment) 

// protected routes
router.patch('/:id', authGuard(IDENTITY), patchComment)
router.delete('/:id', authGuard(IDENTITY), deleteComment)

export default router