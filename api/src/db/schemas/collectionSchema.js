import mongoose from 'mongoose'
import postPlugin from './plugins/postPlugin';
var Schema = mongoose.Schema

var CollectionSchema = new Schema(
  {
    title: String,
    stories: [{
      type: {
        story: Schema.Types.ObjectId, ref: 'Story', 
        number: Number
      }
    }]
  }
)

CollectionSchema.plugin(postPlugin)

export default CollectionSchema
