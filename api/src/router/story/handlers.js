import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import StoryModel from '../../db/models/storyModel'
import AuthorModel from '../../db/models/authorModel'
import ParagraphModel from '../../db/models/paragraphModel'
import util from 'util'

export const getHome = (req, res, next) => {

    //TODO: get news (Elem new stories, very liked stories), latest stories, most liked
}

export const getStories = (req, res, next) => {
    let { params, options } = req.data
    StoryModel._getMany(params, options)
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
          console.log(err)
          next({err: err, code: BAD_REQUEST})
        })
}

export const getStory = (req, res, next) => {
    let { id, options } = req.data
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
  let authorID

  var author = new AuthorModel({
    "name": {"first": "Saturn"},
    "authorName": "Saturn",
    "username": "Saturn",
    "roles": ["Admin"],
    "email": "testmail2@gmail.com",
    "password": "testpass"
  })


  author.save(function (err, author) {
    authorID = author._id


    var preface1 = new ParagraphModel({
      "sentences": [
        "Les Magiciens Explorateurs sont revenus de leur mission spéciale.",
        "Ils ont fait une grande découverte mais n'ont pas pu fournir de détails durant le voyage.",
        "Une cérémonie officielle est organisée, tous les Elms sont invités."
      ] 
    })
    preface1.save((err, paragraph) => {
      var story1 = new StoryModel({
        "title": "Le retour des Explorateurs",
        "author": authorID,
        "keywords": ["Exploration"],
        "preface": paragraph._id      
      })
      story1.save((err, story) => {
        console.log('story 1 saved')
      })
    })



    var preface2 = new ParagraphModel({
      "sentences": [
        "Saturn apprend de l'Elémentaire de l'Air qu'il est destiné à faire revivre l'Ordre des Magiciens.", 
        "Il devra mener une quête, accompagné d'autres Elms choisis"
      ]  
    })
    preface2.save((err, paragraph) => {
      var story2 = new StoryModel({
        "title": "La singularité magique",
        "author": authorID,
        "keywords": ["Quête"],
        "preface": paragraph._id
      })
      story2.save((err, story) => {
        console.log('story 2 saved')
      })
    })



    var preface3 = new ParagraphModel({
      "sentences": [
        "Les Elms de l'association dont Saturn est membre sont partis en excursion dans les Bois Dormants.",
        "Un sage est spécialement venu pour l'occasion, afin de leur raconter une histoire sur les origines d'Elem"
      ]   
    })
    preface3.save((err, paragraph) => {
      var story3 = new StoryModel({
        "title": "Le conte du Sage",
        "author": authorID,
        "keywords": ["Elem", "Conte"],
        "preface": paragraph._id
      })
      story3.save((err, story) => {
        console.log('story 3 saved')
      })
    })
  })
}