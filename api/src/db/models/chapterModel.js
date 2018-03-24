import mongoose from 'mongoose'
import chapterSchema from '../schemas/chapterSchema'

export default mongoose.model('Chapter', chapterSchema)
