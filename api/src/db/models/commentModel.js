import mongoose from 'mongoose'
import commentSchema from '../schemas/commentSchema'

export default mongoose.model('Comment', commentSchema)
