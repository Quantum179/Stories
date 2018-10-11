import express from 'express'
let router = express.Router()
import {jwtAuth} from '../../passport'

import {getUsers, getUser, getProfile, postUser, patchUser, deleteUser} from './handlers'

router.get('/', getUsers)
router.get('/:id', getUser)
router.get('/:id/profile', jwtAuth('IDENTITY'), getProfile)
router.post('/', jwtAuth('ADMIN'), postUser)
router.patch('/:id', jwtAuth('IDENTITY'), patchUser)
router.delete('/:id', jwtAuth('ADMIN'), deleteUser)


export default router

//TODO: refactor all sub-routers in main router with a loop