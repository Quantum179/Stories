import mongoose from 'mongoose'
import postSchema from '../schemas/userSchema'

export default mongoose.model('Post', postSchema)
