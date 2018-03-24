import storySchema from '../schemas/storySchema'
import PostModel from './postModel'

export default PostModel.discriminator('Story', storySchema)
