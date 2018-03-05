import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'role', timestamps: true}; // TODO Quantum : delete role field in result queries


var AuthorSchema = new Schema (
  {
    authorName : String
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    subscribers: [{type: Schema.Types.ObjectId, ref: 'User'}]
  },
  options
)

// Author instance methods


// Author static methods
AuthorSchema.static.findPosts = function(uuidAuthor) {
  return this.model('Author').find({uuidAuthor: uuidAuthor})
          .select({'posts -_id'})
          .populate('posts')

          //TOTHINK Quantum : sort and limit options dynamically handled or not ?
}

export default AuthorSchema
