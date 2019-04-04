import express from 'express'
import { authGuard } from '../../passport'

import { AUTHOR, IDENTITY, ADMIN } from '../../passport/roles'
import { getChronicles, getChronicle, postChronicle, patchChronicle, deleteChronicle } from './handlers'

let router = express.Router()
 
//public routes
router.get('/', getChronicles)

//protected routes
router.get('/:id', authGuard(), getChronicle)
router.post('/', authGuard(ADMIN), postChronicle)
router.patch('/:id', authGuard(IDENTITY), patchChronicle)
router.delete('/:id', authGuard(ADMIN), deleteChronicle)

export default router
