import mongoose from 'mongoose'
var Schema = mongoose.Schema

var DefinitionSchema = new Schema(
  {
    name: String,
    description: String,
    url: String, //TODO: custom validator
    refs: [{ //Excluded from paragraph attribute
      type: Schema.Types.ObjectId,
      ref: 'Paragraph'
    }]
  }
)

export default DefinitionSchema
