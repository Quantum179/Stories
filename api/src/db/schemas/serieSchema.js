import mongoose from 'mongoose'
import postPlugin from './plugins/postPlugin';
var Schema = mongoose.Schema

var SerieSchema = new Schema(
  {
    articles: [{
      type: {
        article: Schema.Types.ObjectId, ref: 'Article', 
        number: Number
      }
    }]
  }
)

SerieSchema.plugin(postPlugin)

export default SerieSchema
