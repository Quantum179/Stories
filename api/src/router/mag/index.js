import express from 'express'
let router = express.Router()
import {jwtAuth} from '../../passport'

import {getMag, getMagNumber, getMagNumberPreview, postMagNumber, patchMagNumber, deleteMagNumber} from './handlers'

router.get('/', getMag)
router.get('/:id', jwtAuth('SUBSCRIBER'), getMagNumber)
router.get('/:id/preview', jwtAuth('USER'), getMagNumberPreview)
router.post('/', jwtAuth('ADMIN'), postMagNumber)
router.patch('/:id', jwtAuth('REVIEWER'), patchMagNumber)
router.delete('/:id', jwtAuth('ADMIN'), deleteMagNumber)

export default router