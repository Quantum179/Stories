import paragraphModel from './paragraphModel'
import messageSchema from '../schemas/messageSchema'

export default paragraphModel.discriminator('Message', messageSchema)