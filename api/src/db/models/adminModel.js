import adminSchema from '../schemas/adminSchema'
import UserModel from './userModel'

export default UserModel.discriminator('Admin', adminSchema)
