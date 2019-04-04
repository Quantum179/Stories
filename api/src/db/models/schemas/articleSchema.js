import { Schema } from 'mongoose'
import ParagraphSchema from './paragraphSchema'
const options = { 
  discriminatorKey: 'type', 
  timestamps: true,
  id: true
}

var ArticleSchema = new Schema (
  {
    topic: {type: Schema.Types.ObjectId, ref: 'Topic', required: true},
    paragraphes: [{type: ParagraphSchema, required: true}]
  },
  options
)

export default ArticleSchema
