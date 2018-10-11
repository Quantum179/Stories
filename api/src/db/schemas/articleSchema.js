import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var ArticleSchema = new Schema (
  {
    topic: {type: Schema.Types.ObjectId, ref: 'Topic'}
  },
  options
)

ArticleSchema.statics.findByTopic = function(topic, fields) {
    return this.find({topic: topic}, fields)
        .exec()
}

ArticleSchema.statics.getOneById = function(id, fields = null) {
    return this.find({id:id}, fields)
        .exec()
}

export default ArticleSchema
