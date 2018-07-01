import mongoose from 'mongoose'
import newsLetterSchema from '../schemas/newsLetterSchema'

export default mongoose.model('NewsLetter', newsLetterSchema)
