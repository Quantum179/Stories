import reviewSchema from '../schemas/reviewSchema'
import CommentModel from './commentModel'

export default CommentModel.discriminator('Review', reviewSchema)
