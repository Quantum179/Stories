import express from 'express'
let router = express.Router()

import { authGuard } from '../../passport'
import { IDENTITY, ADMIN } from '../../passport/roles'

import {getUsers, getUser, getProfile, postUser, patchUser, deleteUser} from './handlers'

//public routes
router.get('/', getUsers)
router.get('/:id', getUser)

//protected routes
router.get('/:id/profile', authGuard(IDENTITY), getProfile)
router.post('/', authGuard(ADMIN), postUser)
router.patch('/:id', authGuard(IDENTITY), patchUser)
router.delete('/:id', authGuard(ADMIN), deleteUser)

export default router