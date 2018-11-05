import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}

var ChapterSchema = new Schema(
  {
    title: String,
    number: Number,
    paragraphes: [{type: Schema.Types.ObjectId, ref: 'Paragraph'}]
  }
)

// Chapter instance methods


// Chapter static methods

export default ChapterSchema
