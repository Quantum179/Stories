import express from 'express'
let router = express.Router()

import {getPosts} from './handlers'

router.get('/', getPosts)

export default router
