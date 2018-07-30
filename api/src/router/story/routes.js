import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import models from '../../db/models'

let routes = []

routes.push({
  action: 'get',
  endpoint: '/',
  needsAuth: false,
  handler: function(req, res, next) {
    let {query, fields, options, ...out} = req.data
    //TODO: get news (Elem new stories, very liked stories), latest stories, most liked
    models.Story.getMany(query, fields, options)
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
})

routes.push({
  action: 'get',
  endpoint: '/:id',
  needsAuth: false,
  handler: function(req, res, next) {
    let {id, fields, ...out} = req.data
    models.Story.getById(id, fields)
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
})

routes.push({
  action: 'post',
  endpoint: '/',
  needsAuth: true,
  handler: function(req, res, next) {
    let {story} = req.data
    models.Story.create(story)
      .then(savedStory => {
        res.status(CREATED)
        res.locals.story = savedStory
        next()
      })
      .catch(err => {
        next({err: err, code: BAD_REQUEST})
      })
  }
})

routes.push({
  action: 'patch',
  endpoint: '/:id',
  needsAuth: true,
  handler: function(req, res, next) {

  }
})

routes.push({
  action: 'delete',
  endpoint: '/:id',
  needsAuth: true,
  handler: function(req, res, next) {

  }
})

export default routes