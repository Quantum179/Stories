import reviewSchema from '../schemas/reviewSchema'
import CommentModel from './commentModel'

var ReviewModel = CommentModel.discriminator('Review', reviewSchema)

export default ReviewModel
