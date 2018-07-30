import mongoose from 'mongoose'
var Schema = mongoose.Schema
import models from '../models'

var TopicSchema = new Schema(
  {
    name: String,
    description: String,
    //discussions: [{type: Schema.Types.ObjectId, ref: "Discussion"}]
    //articles: [{type: Schema.Types.ObjectId, ref: "Article"}]


    

  }
)

TopicSchema.statics.getArticles = function(topic, fields) {
  return models.Article.findByTopic(topic, fields)
}
