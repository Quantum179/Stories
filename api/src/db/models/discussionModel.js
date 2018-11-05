import mongoose from 'mongoose'
import discussionSchema from '../schemas/discussionSchema'

export default mongoose.model('Discussion', discussionSchema)