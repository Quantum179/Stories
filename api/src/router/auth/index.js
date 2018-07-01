import express from 'express'
let router = express.Router()
import passport from '../../passport'
import {authMiddleware, login, register, subscribe} from './handlers'

router.use(authMiddleware)

router.post('/login', login)
router.post('/register', register)
router.post('/subscribe', passport.jwtAuth(), subscribe) 
//TODO : login with passport strategies

export default router
