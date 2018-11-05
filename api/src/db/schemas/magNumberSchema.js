import mongoose from 'mongoose'
var Schema = mongoose.Schema
import postPlugin from './plugins/postPlugin'

var MagNumberSchema = new Schema(
  {
    numberMag: {type: Number, required: true},
    chapters: [{type: Schema.Types.ObjectId, ref: "Post"}],
  }
)

MagNumberSchema.plugin(postPlugin)

export default MagNumberSchema
