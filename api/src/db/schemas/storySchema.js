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
    dimension: String,
    saga: String
    //TODO : composite design pattern
  }
)

export default StorySchema
