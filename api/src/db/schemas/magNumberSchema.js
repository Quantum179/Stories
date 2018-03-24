import mongoose from 'mongoose'
var Schema = mongoose.Schema

var MagNumberSchema = new Schema(
  {
    title: String,
    numberMag: Number,
    chapters: [{type: Schema.Types.ObjectId, ref: "MapChapter"}]
  }
)


export default MagNumberSchema
