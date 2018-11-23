import mongoose from 'mongoose'
var Schema = mongoose.Schema

var ParagraphSchema = new Schema(
  {
    title: String,
    sentences: {
      type: [String],
      required: true
    },
    definitions: [{type: Schema.Types.ObjectId, ref: 'Definition'}]
  }
)

ParagraphSchema.methods.render = function() {
  return this.sentences.join(" ")
}

export default ParagraphSchema
