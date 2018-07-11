import express from 'express'
let router = express.Router()
import passport from '../../passport'
import {magMiddleware, getMag, getMagNumber, postMagNumber, patchMagNumber, deleteMagNumber} from './handlers'

//Middleware
router.use(magMiddleware)

//Routes
router.get('/', getMag)
router.get('/:idMagNumber', passport.jwtAuth(), getMagNumber)
router.post('/', passport.jwtAuth(), postMagNumber)
router.patch('/:idMagNumber', passport.jwtAuth(), patchMagNumber)
router.delete('/:idMagNumber', passport.jwtAuth(), deleteMagNumber)

export default router
