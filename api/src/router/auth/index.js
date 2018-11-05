import express from 'express'
let router = express.Router()
import { jwtAuth } from '../../passport'

import {postLogin, postRegister, postSubscribe} from './handlers'

router.post('/login', postLogin)
router.post('/register', postRegister)
router.post('/subscribe', jwtAuth('USER'), postSubscribe)

export default router