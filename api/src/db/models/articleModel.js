import articleSchema from '../schemas/articleSchema'
import PostModel from './postModel'

export default PostModel.discriminator('Article', articleSchema)
