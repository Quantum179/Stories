import mongoose from 'mongoose'
import ParagraphSchema from './paragraphSchema'
var Schema = mongoose.Schema

var DefinitionSchema = new Schema(
  {
    name: {type: String, required: true},
    description: {
      type: [ParagraphSchema],
      required: true
    },
    definitions: [{type: Schema.Types.ObjectId, ref:'Definition'}],
    keywords: [String] // todo: keyword scheama with links ?
  }
)

export default DefinitionSchema
