import { Schema } from 'mongoose'
import MessageSchema from './messageSchema'

let DiscussionSchema = new Schema(
  {
    users: [{type: Schema.Types.ObjectId, ref: 'User', required: true}],
    messages: [MessageSchema]
  }
)

export default DiscussionSchema