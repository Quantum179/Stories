import mongoose from 'mongoose'
var Schema = mongoose.Schema

export default new Schema(
  {
    title: String,
    introduction: String,
    comments: [{type: Schema.Types.ObjectId, ref: "User"}],
    shares: Number //Do analysis for share schema
  }
)
