import reporterSchema from '../schemas/reporterSchema'
import AuthorModel from './authorModel'

export default AuthorModel.discriminator('Reporter', reporterSchema)
