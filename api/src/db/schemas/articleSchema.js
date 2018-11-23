import mongoose from 'mongoose'
import { buildAnRunQuery } from './plugins/queryPlugin';
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var ArticleSchema = new Schema (
  {
    topic: {type: Schema.Types.ObjectId, ref: 'Topic'}
  },
  options
)

ArticleSchema.statics.findByTopic = function(topic, options) {
  let query = this.find({topic: topic}, fields)
  return buildAnRunQuery(query, options)
}

export default ArticleSchema
