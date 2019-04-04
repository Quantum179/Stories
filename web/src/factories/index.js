import Post from '../models/Post'
import Comment from '../models/Comment'
import User from '../models/User'
import Article from '../models/Article';

const clone = (object) => {
  return JSON.parse(JSON.stringify(object))
}

export const createCommentModel = () => {
  return clone(Comment)
}

export const createPostModel = () => {
  return clone(Post)
}

export const createUserModel = () => {
  return clone(User)
}

export const createArticleModel = () => {
  return clone(Article)
}