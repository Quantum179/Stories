import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

export default new Schema(
  {
    author: {type: Schema.Types.ObjectId, ref: 'Author'},
    content: String
    //Mongoose createAt
  },
  options
)
