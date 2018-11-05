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

// Author instance methods
AuthorSchema.methods.findPosts = function() {

}

AuthorSchema.static.findPosts = function(idAuthor) {
  return this.find({'_id': idAuthor})
          .select('posts')
          .populate('posts', "-_id")

          //TOTHINK Quantum : sort and limit options dynamically handled or not ?
}

export default AuthorSchema
