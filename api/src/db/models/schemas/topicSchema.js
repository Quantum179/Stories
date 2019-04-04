import { Schema } from 'mongoose'
import { Article } from '../index'
const options = { 
  discriminatorKey: 'type', 
  timestamps: true,
  id: true
}

var TopicSchema = new Schema(
  {
    name: {type: String, required: true},
    description: String
  },
  options
)

/* TopicSchema.statics.getArticles = function(topic, fields) {
  return Article.findByTopic(topic, fields)
} */

export default TopicSchema