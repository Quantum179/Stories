import mongoose from 'mongoose'
import newSchema from '../schemas/newSchema'

export default mongoose.model('New', newSchema)