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

ParagraphSchema.statics.getMany = function(query = {}, fields = null) {
  return this.find(query, fields)
    .exec()
}

ParagraphSchema.statics.getOne = function(query = {}, fields = null) {
  return this.findOne(query, fields)
    .exec()
}

ParagraphSchema.methods.render = function() {
  return this.sentences.join(" ")
}

export default ParagraphSchema
