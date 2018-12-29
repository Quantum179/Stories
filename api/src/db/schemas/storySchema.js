import mongoose from 'mongoose'
import queryPlugin from './plugins/queryPlugin';
var Schema = mongoose.Schema
var options = { 
  discriminatorKey: 'type', 
  timestamps: true,
  id: true
}; // TODO Quantum : delete role field in result queries

var StorySchema = new Schema (
  {
    saga: String,
    storyCollection: { type: Schema.Types.ObjectId, ref: 'Collection'}
  }
)

export default StorySchema
