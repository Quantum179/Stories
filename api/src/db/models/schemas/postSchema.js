import { Schema } from 'mongoose'
import ParagraphSchema from './paragraphSchema'
import CommentSchema from './commentSchema'

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
let PostSchema = new Schema(
  {
    title : {type: String, required: true},
    author : {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    preface: ParagraphSchema,
    isTrending: Boolean,
    ratings : [Number],
    likes : Number,
    shares: Number,
    comments : [CommentSchema],
    keywords: [String]
  },
  options
)

export default PostSchema