import mongoose from 'mongoose'
import ParagraphSchema from './paragraphSchema'
let Schema = mongoose.Schema

let announcementSchema = new Schema({
  text: { type: ParagraphSchema, required: true },
  src: String
})

export default announcementSchema