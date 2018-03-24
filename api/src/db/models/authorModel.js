import authorSchema from '../schemas/authorSchema'
import UserModel from './userModel'

export default UserModel.discriminator('Author', authorSchema)
