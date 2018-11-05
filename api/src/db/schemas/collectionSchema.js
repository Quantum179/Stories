import mongoose from 'mongoose'
import postPlugin from './plugins/postPlugin';
var Schema = mongoose.Schema

var CollectionSchema = new Schema(
  {
    stories: [{type: Schema.Types.ObjectId, ref: 'Story'}]
  }
)

CollectionSchema.plugin(postPlugin)

export default CollectionSchema
