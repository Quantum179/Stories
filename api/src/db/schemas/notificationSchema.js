import mongoose from 'mongoose'
const Schema = mongoose.Schema

let NotificationSchema = new Schema(
  {
    source: {type: Schema.Types.ObjectId, required: true}, //Comment, Message, News
    text: {type: String, required: true}
  },
  options
)

export default MessageSchema
