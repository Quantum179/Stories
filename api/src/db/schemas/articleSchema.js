import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var ArticleSchema = new Schema (
  {
    topic: {type: Schema.Types.ObjectId, ref: 'Topic'}
  },
  options
)

export default ArticleSchema
