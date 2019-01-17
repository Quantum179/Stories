import mongoose from 'mongoose'
import PostSchema from './postSchema'
import queryPlugin from './plugins/queryPlugin';

var Schema = mongoose.Schema

var MagNumberSchema = new Schema(
  {
    numberMag: {type: Number, required: true},
    chapters: [{type: PostSchema, required: true}],
  }
)

//Plugins
MagNumberSchema.plugin(queryPlugin)

export default MagNumberSchema
