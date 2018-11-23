import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import StoryModel from '../../db/models/storyModel'
import util from 'util'

export const getHome = (req, res, next) => {

    //TODO: get news (Elem new stories, very liked stories), latest stories, most liked
}

export const getStories = (req, res, next) => {
    let { params, options, ...out } = req.data
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
    let { id, options, ...out } = req.data
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
    let { story } = req.data
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

export const tesr = (req, res, next) => {
  console.log('test111')
  let authorID

  var author = new Tank({
    "name": {"first": "Saturn"},
    "username": "Saturn",
    "roles": ["Admin"],
    "email": "testmail@gmail.com",
    "password": "$2b$10$o6nuelFZrPgeYYIyIK11GeGWC.vT72QpjcVmtGAg.u4um7Y7/MkD."
    // plain pass : testpass
  });
  author.save(function (err, author) {
    authorID = author._id
  });



  let test = [
    {
      "title": "Le retour des Explorateurs",
      "description":
      `Les Magiciens astronautes sont revenus de leur mission spéciale. Ils ont
      fait une grande découverte mais n'ont pas pu fournir de détails durant le
      voyage. Une cérémonie officielle est organisée, tous les Elms sont invités.`,
      "author": authorID,
      "keywords": ["Exploration"]
    },
    {
      "title": "Le retour des Explorateurs",
      "description":
      `Les Magiciens astronautes sont revenus de leur mission spéciale. Ils ont
      fait une grande découverte mais n'ont pas pu fournir de détails durant le
      voyage. Une cérémonie officielle est organisée, tous les Elms sont invités.`,
      "author": authorID,
      "keywords": ["Exploration"]
    },
    {
      "title": "Le retour des Explorateurs",
      "description":
      `Les Magiciens astronautes sont revenus de leur mission spéciale. Ils ont
      fait une grande découverte mais n'ont pas pu fournir de détails durant le
      voyage. Une cérémonie officielle est organisée, tous les Elms sont invités.`,
      "author": authorID,
      "keywords": ["Exploration"]
    },
    {
      "title": "Le retour des Explorateurs",
      "description":
      `Les Magiciens astronautes sont revenus de leur mission spéciale. Ils ont
      fait une grande découverte mais n'ont pas pu fournir de détails durant le
      voyage. Une cérémonie officielle est organisée, tous les Elms sont invités.`,
      "author": authorID,
      "keywords": ["Exploration"]
    }
  ]

  StoryModel._create(test)
  .then(savedStories => {
    console.log('test')
    res.status(200)
    next()
  })
  .catch(err => {
    next(err)
  })
}