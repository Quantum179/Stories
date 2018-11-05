import commentSchema from '../schemas/commentSchema'
import MessageModel from './messageModel'

export default MessageModel.discriminator('Comment', commentSchema)
