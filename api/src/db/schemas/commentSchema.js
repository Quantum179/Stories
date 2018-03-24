import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var CommentSchema = new Schema(
  {
    author: {type: Schema.Types.ObjectId, ref: 'Author'},
    content: String,
    likes: [{type: Schemas.Types.ObjectId, ref: 'User'}],
    replies: [{type: Schemas.Types.ObjectId, ref:'Comment'}]
    //Mongoose createAt
  },
  options
)

export default CommentSchema
