import express from 'express'
let router = express.Router()

import { authGuard } from '../../passport'
import { SUBSCRIBER, ADMIN, REVIEWER } from '../../passport/roles'

import {getMag, getMagNumber, getMagNumberPreview, postMagNumber, patchMagNumber, deleteMagNumber} from './handlers'

//public routes
router.get('/', getMag)
router.get('/:id/preview', getMagNumberPreview)

//protected routes
router.get('/:id', authGuard(SUBSCRIBER), getMagNumber)
router.post('/', authGuard(ADMIN), postMagNumber)
router.patch('/:id', authGuard(REVIEWER), patchMagNumber)
router.delete('/:id', authGuard(ADMIN), deleteMagNumber)

export default router