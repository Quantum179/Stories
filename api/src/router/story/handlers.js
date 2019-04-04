import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import { Story } from '../../db/models'

export const getHome = (req, res, next) => {

    //TODO: get news (Elem new stories, very liked stories), latest stories, most liked
}

export const getStories = (req, res, next) => {
  let { params, options } = req.data

  Story._getMany(params, options)
    .then(stories => {
      if (!stories || stories.length === 0) {
        next({code: NOT_FOUND})
      } else {
        res.status(OK)
        res.locals.stories = stories
        next()
      }
    })
    .catch(err => {
      next({err: err, code: BAD_REQUEST})
    })
}

export const getStory = (req, res, next) => {
  let id = req.params.id
  let { options } = req.data

  Story._getByID(id, options)
    .then(story => {
      if(!story)  {
        next({code: NOT_FOUND})
      } else {
        res.status(OK)
        res.locals.story = story
        next()
      }
    })
    .catch(err => {
        next({err: err, code: BAD_REQUEST})
    })  
}

export const postStory = (req, res, next) => {
  let { story } = req.data
  
  Story._create(story)
    .then(savedStory => {
        res.status(CREATED)
        res.locals.storyID = savedStory.id
        next()
    })
    .catch(err => {
        next({err: err, code: BAD_REQUEST})
    })
}

export const patchStory = (req, res, next) => {

}

export const deleteStory = (req, res, next) => {

}