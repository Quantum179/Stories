import mongoose from 'mongoose'
var Schema = mongoose.Schema
import postPlugin from './plugins/postPlugin'
import queryPlugin from './plugins/queryPlugin';
var options = { 
  discriminatorKey: 'type', 
  timestamps: true,
   toObject: {
    virtuals: true
  }
  ,toJSON: {
    virtuals: true
  }
}
//Virtual class
let PostSchema = new Schema (
  {
    author : {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    chapters: [{type: Schema.Types.ObjectId, ref: 'Chapter'}],
    keywords: [String],
    // mongoose createAt
    // Mongoose updateAt
  },
  options
)

PostSchema.plugin(postPlugin)
PostSchema.plugin(queryPlugin)

/* PostSchema.pre('remove', function(next) {

})
 */
export default PostSchema