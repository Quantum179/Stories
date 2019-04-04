import { Schema } from 'mongoose'
const options = { discriminatorKey: 'type', timestamps: true} // TODO Quantum : delete role field in result queries

let NewsSchema = new Schema(
  {
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    text: {type: String, required: true}
  },
  options
)

export default NewsSchema
