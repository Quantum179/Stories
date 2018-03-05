import mongoose from 'mongoose'
import storySchema from '../schemas/storySchema'

var StoryModel = mongoose.model('Story', storySchema)

// TODO Quantum : story methods for queries

export default StoryModel
