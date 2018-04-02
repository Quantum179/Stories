import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var StorySchema = new Schema (
  {
    dimension: String,
    saga: String
    //TODO Quamtum : composite design pattern
  },
  options
)

StorySchema.statics.getStoryById = function(idStory, cb) {
  this.find(idStory, (err, story) => {
    cb(err, story)
  })
}
StorySchema.statics.getStories = function(cb) {
  this.find({}, (err, stories) => {
    cb(err, stories)
  })
}
StorySchema.statics.addStory = function(story, cb) {
  this.create(story, (err, addedStory) => {
    cb(err, addedStory)
  })
}
StorySchema.statics.addStories = function(stories, cb) {
  let err = {}
  stories = stories.map((story) => {
    this.create(story, function (e, addedStory) {
      if (e) { err = e }
      console.log('Story added')
      return user
    })
  })

  cb(err, stories)
}


export default StorySchema
