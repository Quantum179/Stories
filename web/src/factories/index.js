import Comment from '../models/Comment'

export const createCommentModel = () => {
  return Object.create(Comment)
}