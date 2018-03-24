import mongoose from 'mongoose'
var Schema = mongoose.Schema

var CollectionSchema = new Schema(
  {
    title: String,
    stories: [{type: Schema.Types.ObjectId, ref: 'Story'}]
  }
)

export default CollectionSchema
