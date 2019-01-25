import mongoose from 'mongoose'
import MessageSchema from './messageSchema'
const Schema = mongoose.Schema


let DiscussionSchema = new Schema(
  {
    users: {
      type: [{type: Schema.Types.ObjectId, ref: 'User'}],
      required: true
    },
    messages: [MessageSchema]
  }
)

export default DiscussionSchema