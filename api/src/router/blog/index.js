import express from 'express'
let router = express.Router()
import { jwtAuth } from '../../passport'

import { getBlog, getTopics, getTopic, getArticles, getArticle, postArticle } from './handlers'

router.get('/', getBlog)
router.get('/topics/', getTopics)
router.get('/topics/:id', getTopic)
router.get('/articles', getArticles)
router.get('/articles/:id', getArticle)
router.post('/articles', postArticle)

export default router
