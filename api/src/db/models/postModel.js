import mongoose from 'mongoose'
import postSchema from './schemas/userSchema'

var PostModel = mongoose.model('Post', postSchema)

// TODO Quantum : Post methods for queries

export default PostModel
