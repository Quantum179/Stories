import mongoose from 'mongoose'
var Schema = mongoose.Schema

export default new Schema(
  {
    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
  }
)
