import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries


var AuthorSchema = new Schema (
  {
    authorName : String,
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    readers: [{type: Schema.Types.ObjectId, ref: 'User'}]
  }
)

export default AuthorSchema
