import mongoose from 'mongoose'
import ParagraphSchema from './paragraphSchema'
import queryPlugin from './plugins/queryPlugin'

const Schema = mongoose.Schema
const options = { 
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
    title : {type: String, required: true},
    author : {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    description: String, // todo : decide if description is really necessary because preface does the job well
    preface: ParagraphSchema,
    isTrending: Boolean,
    ratings : [Number],
    likes : Number,
    shares: Number,
    comments : [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    keywords: [String]
  },
  options
)

PostSchema.plugin(queryPlugin)

/* PostSchema.pre('remove', function(next) {

})
 */
export default PostSchema