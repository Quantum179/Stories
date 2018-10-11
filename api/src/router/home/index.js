import express from 'express'
let router = express.Router()

import {getHome} from './handlers'

router.get('/', getHome)

export default router