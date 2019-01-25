import mongoose from 'mongoose'
import announcementSchema from '../schemas/announcementSchema'

export default mongoose.model('Announcement', announcementSchema)