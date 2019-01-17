import mongoose from 'mongoose'
var Schema = mongoose.Schema

var ParagraphSchema = new Schema(
  {
    title: String,
    number: Number,
    text: {
      type: String,
      required: true
    },
    definitions: [{type: Schema.Types.ObjectId, ref: 'Definition'}]
  }
)

export default ParagraphSchema
