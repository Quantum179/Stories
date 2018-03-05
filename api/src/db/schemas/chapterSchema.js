import mongoose from 'mongoose'
var Schema = mongoose.Schema

var ChapterSchema = new Schema(
  {
    title: String,
    paragraphes: [{type: Schema.Types.ObjectId, ref: 'Paragraph'}]
  }
)

// Chapter instance methods


// Chapter static methods

export default ChapterSchema
