import mongoose from 'mongoose'
import paragraphSchema from '../schemas/paragraphSchema'

export default mongoose.model('Paragraph', paragraphSchema)
