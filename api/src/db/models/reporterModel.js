import reporterSchema from './schemas/reporterSchema'
import AuthorModel from './authorModel'

var ReporterModel = AuthorModel.discriminator('Reporter', reporterSchema)

// TODO Quantum : define reporter methods for queries


export default ReporterModel
