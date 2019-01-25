import mongoose from 'mongoose'
import ParagraphSchema from './paragraphSchema'
var Schema = mongoose.Schema

var options = { discriminatorKey: 'type', timestamps: true}

var ChapterSchema = new Schema(
  {
    title: String,
    number: { type: Number, required: true },
    paragraphes: { type: [ParagraphSchema], required: true },
    definitions: [{ type: Schema.Types.ObjectId, ref: 'Definition' }]
  }
)

// Chapter instance methods


// Chapter static methods

export default ChapterSchema
