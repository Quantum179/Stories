import mongoose from 'mongoose'
var Schema = mongoose.Schema

var DefinitionSchema = new Schema(
  {
    name: String,
    description: [{type: Schema.Types.ObjectId, ref: 'Paragraph'}],
    definitions: [{type: Schema.Types.ObjectId, ref:'Definition'}],
    keywords: [String] // todo: keyword scheama with links ?
  }
)

export default DefinitionSchema
