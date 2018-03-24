import mongoose from 'mongoose'
var Schema = mongoose.Schema

export default new Schema(
  {
    title: String,
    description: String,
    articles: [{type: Schema.Types.ObjectId, ref: "Article"}]
  }
)
