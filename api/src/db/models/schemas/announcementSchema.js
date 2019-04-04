import { Schema } from 'mongoose'
import ParagraphSchema from './paragraphSchema'

let announcementSchema = new Schema({
  title: {type: String, required: true},
  text: {type: ParagraphSchema, required: true},
  src: String
})

export default announcementSchema