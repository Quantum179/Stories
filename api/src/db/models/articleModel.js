import articleSchema from '../schemas/articleSchema'
import PostModel from './postModel'

var ArticleModel = PostModel.discriminator('Article', articleSchema)

export default ArticleModel
