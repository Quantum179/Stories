import mongoose from 'mongoose'
import chronicleSchema from '../schemas/chronicleSchema'
import PostModel from './postModel'

export default PostModel.discriminator('Chronicle', chronicleSchema)
