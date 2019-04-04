import { Schema } from 'mongoose'
import ParagraphSchema from './paragraphSchema'

let MailSchema = new Schema(
  {
    title: { type: String, required: true },
    paragraphes: [{type: ParagraphSchema, required: true}]
  }
)

export default MailSchema