import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import StoryModel from '../../db/models/storyModel'


export const getHome = (req, res, next) => {

    //TODO: get news (Elem new stories, very liked stories), latest stories, most liked
}

export const getStories = (req, res, next) => {
    let {params, options, ...out} = req.data
    StoryModel._getMany(params, options)
        .then(stories => {
          if (!stories || stories.length == 0) {
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
    let {id, options, ...out} = req.data
    StoryModel._getById(id, options)
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
    let {story} = req.data
    StoryModel._create(story)
        .then(savedStory => {
            res.status(CREATED)
            res.locals.story = savedStory
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