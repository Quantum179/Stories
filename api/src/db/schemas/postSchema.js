import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

//Virtual class
export default new Schema (
  {
    title : {
      type: String,
      required: true
    },
    description : String, // TODO Quantum : limit description size
    preface: [{type: Schema.Types.ObjectId, ref: 'Paragraph'}],
    author : {
      type: Schema.Types.ObjectId, 
      ref: 'Author', 
      required: true
    },
    chapters: [{type: Schema.Types.ObjectId, ref: 'Chapter'}],
    keywords: [String],
    // mongoose createAt
    // Mongoose updateAt
    
    //refactor
    isTrending: Boolean,
    ratings : [Number],
    likes : [{type: Schemas.Types.ObjectId, ref: 'User'}],
    comments : [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    //end refactor

    // TODO Quantum : handle shares
   
  },
  options
)
