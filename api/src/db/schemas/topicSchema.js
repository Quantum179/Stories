import mongoose from 'mongoose'
var Schema = mongoose.Schema
import models from '../models'
import {queryPlugin} from './plugins'

var TopicSchema = new Schema(
  {
    name: String,
    description: String
  }
)

TopicSchema.statics.getArticles = function(topic, fields) {
  return models.Article.findByTopic(topic, fields)
}

//Plugins
TopicSchema.plugin(queryPlugin)

export default TopicSchema