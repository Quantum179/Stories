import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var StorySchema = new Schema (
  {
    dimension: String,
    saga: String
    //TODO : composite design pattern
  }
)

//TODO : check if plugins are also inherited

export default StorySchema
