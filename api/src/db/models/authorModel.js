import authorSchema from './schemas/authorSchema'
import UserModel from './userModel'

var AuthorModel = UserModel.discriminator('Author', authorSchema)

// TODO Quantum : define author methods for queries


export default AuthorModel
