import { Schema } from 'mongoose'

let ParagraphSchema = new Schema(
  {
    title: String,
    number: Number,
    text: {type: String, required: true},
    definitions: [{type: Schema.Types.ObjectId, ref: 'Definition'}]
  }
)

export default ParagraphSchema
