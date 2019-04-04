import { Schema } from 'mongoose'
import PostSchema from './postSchema'

let MagNumberSchema = new Schema(
  {
    numberMag: { type: Number, required: true },
    chapters: [{type: PostSchema, required: true}]
  }
)

export default MagNumberSchema
