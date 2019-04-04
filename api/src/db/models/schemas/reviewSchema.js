import { Schema } from 'mongoose'
import CommentSchema from './commentSchema'
var options = { discriminatorKey: 'role', timestamps: true}; // TODO Quantum : delete role field in result queries

let ReviewSchema = new Schema(
  {
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    relatedParagraph: {type: Schema.Types.ObjectId, ref: 'Paragraph'},
    suggestedParagraph: {type: Schema.Types.ObjectId, ref: 'Paragraph'},
    approvals: [{type: Schema.Types.ObjectId, ref: 'User'}],
    comments : [CommentSchema],

  },
  options
)

export default ReviewSchema