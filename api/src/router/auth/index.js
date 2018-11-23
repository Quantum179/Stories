import express from 'express'
let router = express.Router()

import {postLogin, postRegister, postSubscribe} from './handlers'

router.post('/login', postLogin)
router.post('/register', postRegister)
router.post('/subscribe', postSubscribe)

export default router