import mongoose from 'mongoose'
import ChapterSchema from './chapterSchema'

const Schema = mongoose.Schema
const options = { 
  discriminatorKey: 'type', 
  timestamps: true,
  id: true
}; // TODO Quantum : delete role field in result queries

let StorySchema = new Schema (
  {
    saga: String,
    storyCollection: { type: Schema.Types.ObjectId, ref: 'Collection'},
    chapters: [{type: ChapterSchema, required: true}]
  }
)

export default StorySchema
