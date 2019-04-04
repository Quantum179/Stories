import { Schema } from 'mongoose'
var options = { discriminatorKey: 'type', timestamps: true}

var CommentSchema = new Schema(
  {
    source: {type: Schema.Types.ObjectId, required: true}, //http://mongoosejs.com/docs/populate.html#dynamic-ref
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    replies: [{type: Schema.Types.ObjectId, ref:'Comment'}],
  },
  options
)

export default CommentSchema
