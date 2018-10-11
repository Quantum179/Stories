import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'role', timestamps: true}; // TODO Quantum : delete role field in result queries

export default new Schema (
  {
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    relatedParagraph: {type: Schema.Types.ObjectId, ref: 'Paragraph'},
    suggestedParagraph: {type: Schema.Types.ObjectId, ref: 'Paragraph'}
  },
  options
)
