import mongoose from 'mongoose'
import notificationSchema from '../schemas/notificationSchema'

export default mongoose.model('Notification', notificationSchema)