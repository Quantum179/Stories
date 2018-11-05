import mongoose from 'mongoose'
import mailSchema from '../schemas/mailSchema'

export default mongoose.model('Mail', mailSchema)
