import mongoose from 'mongoose'
import commentSchema from './schemas/commentSchema'

var CommentModel = mongoose.model('Comment', commentSchema)

// TODO : comment methods for queries
export default CommentModel
