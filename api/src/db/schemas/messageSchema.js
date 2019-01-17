import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var MessageSchema = new Schema(
  {
    author: {type: Schema.Types.ObjectId, ref: 'User'}
  },
  options
)

export default MessageSchema
