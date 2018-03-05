import adminSchema from './schemas/adminSchema'
import UserModel from './userModel'

var AdminModel = UserModel.discriminator('Admin', adminSchema)

// TODO Quantum : define admin methods for queries


export default AdminModel
