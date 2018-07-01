import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries


var AuthorSchema = new Schema (
  {
    authorName : String,
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  },
  options
)

// Author instance methods
AuthorSchema.methods.findPosts = function() {
  return this.model('Author').find({_id: this._id})
  .select('posts')
  .populate('posts', "-_id")
}

// Author static methods
AuthorSchema.static.findByID = function(idAuthor) {
  return this.find({'_id': idAuthor})
}

AuthorSchema.static.findPosts = function(idAuthor) {
  return this.find({'_id': idAuthor})
          .select('posts')
          .populate('posts', "-_id")

          //TOTHINK Quantum : sort and limit options dynamically handled or not ?
}

export default AuthorSchema
