import mongoose from 'mongoose'
var Schema = mongoose.Schema

var DefinitionSchema = new Schema(
  {
    name: String,
    description: String
  }
)

export default DefinitionSchema
