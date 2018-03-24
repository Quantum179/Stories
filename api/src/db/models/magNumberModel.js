import mongoose from 'mongoose'
import magNumberSchema from '../schemas/magNumberSchema'

export default mongoose.model('MagNumber', magNumberSchema)
