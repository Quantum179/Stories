import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}


var MagChapterSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId, 
      ref: "Post",
      required: true
    }
  }
)


export default MagChapterSchema
