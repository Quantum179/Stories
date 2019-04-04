import { Schema } from 'mongoose'
import ParagraphSchema from './paragraphSchema'

let DefinitionSchema = new Schema(
  {
    name: {type: String, required: true},
    description: [{type: ParagraphSchema, required: true}],
    relatedDefinitions: [{type: Schema.Types.ObjectId, ref: 'Definition'}],
    keywords: [String] // todo: keyword schema with links ?
  }
)

export default DefinitionSchema
