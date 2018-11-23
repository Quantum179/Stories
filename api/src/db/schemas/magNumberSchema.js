import mongoose from 'mongoose'
var Schema = mongoose.Schema
import postPlugin from './plugins/postPlugin'
import queryPlugin from './plugins/queryPlugin';

var MagNumberSchema = new Schema(
  {
    numberMag: {type: Number, required: true},
    chapters: [{type: Schema.Types.ObjectId, ref: "Post"}],
  }
)

//Plugins
MagNumberSchema.plugin(postPlugin)
MagNumberSchema.plugin(queryPlugin)

export default MagNumberSchema
