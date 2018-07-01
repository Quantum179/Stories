import mongoose from 'mongoose'
var Schema = mongoose.Schema

var NewsLetterSchema = new Schema(
  {
    title: String,
    paragraphes: [{type: Schema.Types.ObjectId, ref:'Paragraph'}]
  }
)

export default NewsSchema