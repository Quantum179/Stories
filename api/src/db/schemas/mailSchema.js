import mongoose from 'mongoose'
import ParagraphSchema from './paragraphSchema';
const Schema = mongoose.Schema

let MailSchema = new Schema(
  {
    title: { type: String, required: true },
    paragraphes: { type: [ParagraphSchema], required: true }
  }
)

export default MailSchema