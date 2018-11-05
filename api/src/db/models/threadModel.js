import mongoose from 'mongoose'
import threadSchema from '../schemas/threadSchema'

export default mongoose.model('Thread', threadSchema)