import { Schema } from 'mongoose'

let NotificationSchema = new Schema(
  {
    source: {type: Schema.Types.ObjectId, required: true},
    text: {type: String, required: true}
  }
)

export default NotificationSchema
