import mongoose from 'mongoose'
const Schema = mongoose.Schema
const options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

let MessageSchema = new Schema(
  {
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    text: {type: String, required: true}
  },
  options
)

export default MessageSchema
