
import models from '../../db/models'
import utils from '../../utils'
import {NOT_FOUND, SERVER_ERROR, BAD_REQUEST} from '../../constants'
let GET_STORIES = 'get-stories',
    GET_STORY = 'get-story',
    POST_STORY = 'post-story'

//Helpers
function formatResponse(payload, handler) {
    let data = {}
  
    switch(handler) {
      case GET_STORIES:
        data.message = `${payload.length} stories found`
        data.stories = payload.map(s => {
          return utils.formatObject(s)
        })
        break
      case GET_STORY:
        data.message = "Story found"
        data.story = utils.formatObject(payload)
        break
    }
  
    return data
}

//Handlers methods
function storyMiddleware(req, res, next) {
  next()
}
function getStories(req, res) {
  let {formatErr, query, fields, options, ...out} = req.data

  //TODO: get news (Elem new stories, very liked stories), latest stories, most liked
  models.Story.getMany(query, fields, options)
    .then(stories => {
      if (!stories || stories.length == 0) {
        return res.status(404).json(utils.parseError(true, NOT_FOUND))
      } else {
        return res.status(200).json(formatResponse(stories, GET_STORIES))
      }
    })
    .catch(err => {
        return res.status(400).json(utils.parseError(err, BAD_REQUEST)) //TODO : refactor in global middleware (error handler for every route)
    })
}
function getStory(req, res) {
  let {formatErr, id, fields, ...out} = formatRequest(req, GET_STORY)

  if(formatErr) {
    return res.status(400).json(utils.parseError(formatErr, BAD_REQUEST))
  } else {
    models.Story.getById(id, fields)
    .then(story => {
      if(!story)  {
        return res.status(404).json(utils.parseError(true, NOT_FOUND))
      } else {
        return res.status(200).json(formatResponse(story, GET_STORY))
      }
    })
    .catch(err => {
      return res.status(400).json(utils.parseError(err, BAD_REQUEST))
    })  
  }
}
function postStory(req, res) {
  let {formatErr, story, ...out} = formatRequest(req, POST_STORY)

  if(formatErr) {
    return res.status(400).json(utils.parseError(formatErr, BAD_REQUEST))
  } else {
    models.Story.create(story)
      .then(savedStory => {
        return res.status(201).json(formatResponse(savedStory, POST_STORY))
      })
      .catch(err => {
        //TODO: duplicate properties
        return res.status(400).json(utils.parseError(err, BAD_REQUEST))
      })
  }
}
function patchStory(req, res) {
  
}
function deleteStory(req, res) {
  
}


export {
  storyMiddleware,
  getStories,
  getStory,
  postStory,
  patchStory,
  deleteStory
}