import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import { Comment, Post } from '../../db/models'
import { getFlatBody } from '../../utils';


export const getHome = (req, res, next) => {

    //TODO: get news (Elem new stories, very liked stories), latest stories, most liked
}

export const getComments = (req, res, next) => {
  let {params, options} = req.data
  
  Comment._getMany(params, options)
    .then(comments => {
      if(!comments || comments.length === 0) {
        next({code: NOT_FOUND})
      } else {
        res.status(OK)
        res.locals = comments
        next()
      }
    })
    .catch(err => {
      next({err: err, code: BAD_REQUEST})
    })
}

export const getComment = (req, res, next) => {
  let { id } = req.params.id
  let { options } = req.data
  
  Comment._getOne(id, options)
    .then(comment => {
      if(!comment) {
        next({code: NOT_FOUND})
      } else {
        res.status(OK)
        res.locals.comment = comment
        next()      
      }
    })
    .catch(err => {
      next({err: err, code: BAD_REQUEST})
    })
}

export const postComment = (req, res, next) => {
  let { comment, sourceType } = getFlatBody(req.body)
  let newComment = new Comment(comment)

  switch(sourceType) {
    case 'comment':
    Comment._getOne({id: newComment.sourceID})
        .then(sourceComment => {
          if(!sourceComment) {
            next({code: BAD_REQUEST})
          } else {
            newComment.save()
              .then(() => {
                sourceComment.replies.push(newComment)
                sourceComment.save()
                res.status(CREATED)
                next()            
              })
              .catch(err => {
                next({err: err, code: BAD_REQUEST})            
              })
          }
        })
        .catch(err => {
          next({err: err, code: BAD_REQUEST})           
        })
    case 'post': 
      Post._getOne({id: newComment.sourceID})
        .then(post => {
          if(!post) {
            next({code: BAD_REQUEST})
          } else {
            newComment.save()
              .then(() => {
                post.comments.push(newComment)
                post.save()
                res.status(CREATED)
                next()              
              })
              .catch(err => {
                next({err: err, code: BAD_REQUEST})                 
              })
          }
        })
        .catch(err => {
          next({err: err, code: BAD_REQUEST})
        })
    default:
      next({code: BAD_REQUEST})
  } 



}

export const patchComment = (req, res, next) => {

}

export const deleteComment = (req, res, next) => {

}