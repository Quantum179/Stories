import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var StorySchema = new Schema (
  {
    dimension: String,
    saga: String
    //TODO Quamtum : composite design pattern
  }
)


StorySchema.statics.getMany = function(query, fields = null) {
  return this.find(query, fields)
    .exec()
}
StorySchema.statics.getOne = function(query, fields = null) {
  return this.findOne(query, fields)
    .exec()
}
StorySchema.statics.getById = function(id, fields = null) {
  return this.findById(id, fields)
  .exec()
}
StorySchema.statics.addStory = function(story) {
  return this.create(story)
}
StorySchema.statics.addStories = function addStories(stories) {
  return this.create(stories)
}


export default StorySchema
