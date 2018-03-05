import mongoose from 'mongoose'
var Schema = mongoose.Schema

export default new Schema(
  {
    title: String,
    content: String,
    definitions: [{type: Schema.Types.ObjectId, ref: 'Definition'}]
  }
)
