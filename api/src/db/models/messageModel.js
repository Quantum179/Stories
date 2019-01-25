import mongoose from 'mongoose'
import messageSchema from '../schemas/messageSchema'

export default mongoose.model('Message', messageSchema)