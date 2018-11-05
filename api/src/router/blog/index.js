import express from 'express'
let router = express.Router()
import { jwtAuth } from '../../passport'

import {getBlog, getTopics, getTopic, getArticle} from './handlers'

router.get('/', getBlog)
router.get('/topics/', getTopics)
router.get('/topics/:idTopic', getTopic)
router.get('/topics/:idArticle', jwtAuth('PERMITTED_ARTICLE'), getArticle)

export default router
