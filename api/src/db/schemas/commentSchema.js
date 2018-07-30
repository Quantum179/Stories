import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var CommentSchema = new Schema(
  {
    author: {type: Schema.Types.ObjectId, ref: 'Author'},
    source: {type: Schema.Types.ObjectId, required: true}, //http://mongoosejs.com/docs/populate.html#dynamic-ref
    content: String,
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    replies: [{type: Schema.Types.ObjectId, ref:'Comment'}]
    //Mongoose createAt
  },
  options
)

export default CommentSchema
