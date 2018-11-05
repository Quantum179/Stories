import mongoose from 'mongoose'
var Schema = mongoose.Schema

export default new Schema(
  {
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    source: {type: Schema.Types.ObjectId, required: true}, //http://mongoosejs.com/docs/populate.html#dynamic-ref
    currentChapter: {type: Schema.Types.ObjectId, required: true},
    currentParagraph: {type: Schema.Types.ObjectId, ref: 'Paragraph', required: true}

    //todo : global required
  }
)
