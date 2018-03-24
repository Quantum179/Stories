import mongoose from 'mongoose'
var Schema = mongoose.Schema

var ParagraphSchema = new Schema(
  {
    title: String,
    content: String,
    definitions: [{type: Schema.Types.ObjectId, ref: 'Definition'}]
  }
)

export default ParagraphSchema
