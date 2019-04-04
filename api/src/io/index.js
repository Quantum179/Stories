import express from 'express'
let router = express.Router()

import chatRouter from './chat'
import gameRouter from './game'
import readingRouter from './reading'

router.use('/chat', chatRouter)
router.use('/game', gameRouter)
router.use('/reading', readingRouter)

export default router
