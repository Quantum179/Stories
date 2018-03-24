import mongoose from 'mongoose'
import collectionSchema from '../schemas/collectionSchema'

export default mongoose.model('Collection', collectionSchema)
