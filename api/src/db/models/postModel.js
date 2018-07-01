import mongoose from 'mongoose'
import postSchema from '../schemas/postSchema'

export default mongoose.model('Post', postSchema)
