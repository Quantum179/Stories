import mongoose from 'mongoose'
import userSchema from './schemas/userSchema'

var UserModel = mongoose.model('User', userSchema)

// TODO Quantum : methods for User

export default UserModel
