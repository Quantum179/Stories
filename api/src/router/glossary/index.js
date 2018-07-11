import express from 'express'
let router = express.Router()
import pass from '../../passport'
import {glossaryMiddleware, getGlossary, getDefinition, postDefinition, patchDefinition, deleteDefinition} from './handlers'

//Middleware
router.use(glossaryMiddleware)

//Routes
router.get('/', getGlossary)
router.get('/:idDefinition', getDefinition)
router.post('/idDefinition', passport.jwtAuth(), postDefinition)
router.patch('/:idDefinition', passport.jwtAuth(), patchDefinition)
router.delete('/:idDefinition', passport.jwtAuth(), deleteDefinition)
export default router
