import express from 'express'
let router = express.Router()
import passport from '../../passport'
import {userRequest, userResponse, getUsers, getUser, getProfile, postUser, patchUser} from './handlers'
//TODO: try to refactor in object destructing style

router.use(userRequest)

router.get('/', getUsers)
router.get('/:idUser', getUser)
router.get('/:idUser/profile', passport.jwtAuth(), getProfile)
router.post('/', passport.jwtAuth(), postUser)
router.patch('/:idUser', passport.jwtAuth(), patchUser)
router.delete('/:idUser', passport.jwtAuth(), deleteUser)

router.use(userResponse)

export default router;
