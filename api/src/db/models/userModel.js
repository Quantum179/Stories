import {mongoose} from '../index'
import userSchema from '../schemas/userSchema'

export default mongoose.model('User', userSchema)
