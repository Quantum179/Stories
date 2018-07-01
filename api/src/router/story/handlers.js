
import models from '../../db/models'
import utils from '../../utils'
import {NOT_FOUND, SERVER_ERROR, BAD_REQUEST} from '../../constants'
let GET_STORIES = 'get-stories',
    GET_STORY = 'get-story',
    POST_STORY = 'post-story'

//Helpers
function formatRequest(req, handler) {
    let data = {}
  
    switch(handler) {
      case GET_STORIES:
        data.query = Object.assign({}, req.query.query)
        data.fields = Object.assign({}, req.query.fields)
        break
      case GET_STORY:
        data.id = Object.assign({}, req.params.idStory)
        data.fields = Object.assign({}, req.query.fields)
        break
    }
  
    return data
  }
  
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
  let {query, fields, ...out} = formatRequest(req, GET_STORIES)

  models.Story.getMany(query, fields)
    .then(function(stories) {
      if (!stories || stories.length == 0) {
        return res.status(404).json(utils.parseError(true, NOT_FOUND))
      } else {
        return res.status(200).json(formatResponse(stories, GET_STORIES))
      }
    })
    .catch(function(err) {
        return res.status(400).json(utils.parseError(err, BAD_REQUEST)) //TODO : refactor in global middleware (error handler for every route)
    })
}
function getStory(req, res) {
  let {id, fields, ...out} = formatRequest(req, GET_STORY)

  models.Story.getById(id, fields)
    .then(function(story) {
      if(!story)  {
        return res.status(404).json(utils.parseError(true, NOT_FOUND))
      } else {
        return res.status(200).json(formatResponse(story, GET_STORY))
      }
    })
    .catch(function(err) {
      return res.status(400).json(utils.parseError(err, BAD_REQUEST))
    })
}
function postStory(req, res) {

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