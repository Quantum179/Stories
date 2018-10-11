import express from 'express'
let router = express.Router()

import {getChronicles, getChronicle, getChroniclePreview, postChronicle, patchChronicle, deleteChronicle} from './handlers'

router.get('/', getChronicles)
router.get('/:id', jwtAuth('SUBSCRIBER'), getChronicle)
router.get('/:id/preview', jwtAuth('USER'), getChroniclePreview)
router.post('/', jwtAuth('ADMIN'), postChronicle)
router.patch('/:id', jwtAuth('REVIEWER'), patchChronicle)
router.delete('/:id', jwtAuth('ADMIN'), deleteChronicle)
export default router
