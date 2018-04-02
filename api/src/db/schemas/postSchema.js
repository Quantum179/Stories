import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

export default new Schema (
  {
    title : String,
    description : String, // TODO Quantum : limit description size
    author : {type: Schema.Types.ObjectId, ref: 'Author'},
    // mongoose createAt
    // Mongoose updateAt
    isTrending : Boolean,
    likes : Number,
    comments : [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    chapters: [{type: Schema.Types.ObjectId, ref:'Chapter'}],
    // TODO Quantum : handle shares
    keywords: [String]
  },
  options
)