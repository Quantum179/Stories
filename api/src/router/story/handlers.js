import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import StoryModel from '../../db/models/storyModel'
import AuthorModel from '../../db/models/authorModel'
import ParagraphModel from '../../db/models/paragraphModel'
import ChapterModel from '../../db/models/chapterModel'
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
        console.log(stories[2])
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
  StoryModel._getByID(id, options)
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
    console.log('author saved')



    var story1 = new StoryModel({
      "title": "Le retour des Explorateurs",
      "author": authorID,
      "keywords": ["Exploration"],
      "preface": {
        "text": `Les Magiciens Explorateurs sont revenus de leur mission spéciale. 
                  Ils ont fait une grande découverte mais n'ont pas pu fournir de détails durant le voyage.
                  Une cérémonie officielle est organisée, tous les Elms sont invités.`
      },
      "chapters": [{
        "number": 1,
        "paragraphes": [{
          "text": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam sit amet mauris ut ligula venenatis rhoncus.
          Vestibulum posuere mi eget velit malesuada, nec finibus sem vulputate.
          Mauris vitae placerat ex.
          Integer risus risus, bibendum a justo vitae, malesuada aliquet eros.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Pellentesque nec purus nibh.
          Mauris auctor eros at ultrices bibendum.
          In feugiat eros nulla, et iaculis enim aliquam eget.
          Sed consectetur, urna et efficitur suscipit, turpis ligula elementum ex, sit amet maximus urna massa et tortor.
          Nunc tempus elit sapien, vitae interdum eros fringilla in.
          Maecenas eu nisl magna.
          Pellentesque dignissim nibh eu nulla ultricies rutrum.
          Quisque tempus libero sit amet ligula auctor, nec iaculis risus dictum.
          Sed vitae faucibus arcu.
          Integer congue dolor eu ipsum rhoncus fermentum.`
        },
        {
          "text": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam sit amet mauris ut ligula venenatis rhoncus.
          Vestibulum posuere mi eget velit malesuada, nec finibus sem vulputate.
          Mauris vitae placerat ex.
          Integer risus risus, bibendum a justo vitae, malesuada aliquet eros.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Pellentesque nec purus nibh.
          Mauris auctor eros at ultrices bibendum.
          In feugiat eros nulla, et iaculis enim aliquam eget.
          Sed consectetur, urna et efficitur suscipit, turpis ligula elementum ex, sit amet maximus urna massa et tortor.
          Nunc tempus elit sapien, vitae interdum eros fringilla in.
          Maecenas eu nisl magna.
          Pellentesque dignissim nibh eu nulla ultricies rutrum.
          Quisque tempus libero sit amet ligula auctor, nec iaculis risus dictum.
          Sed vitae faucibus arcu.
          Integer congue dolor eu ipsum rhoncus fermentum.`
        },
        {
          "text": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam sit amet mauris ut ligula venenatis rhoncus.
          Vestibulum posuere mi eget velit malesuada, nec finibus sem vulputate.
          Mauris vitae placerat ex.
          Integer risus risus, bibendum a justo vitae, malesuada aliquet eros.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Pellentesque nec purus nibh.
          Mauris auctor eros at ultrices bibendum.
          In feugiat eros nulla, et iaculis enim aliquam eget.
          Sed consectetur, urna et efficitur suscipit, turpis ligula elementum ex, sit amet maximus urna massa et tortor.
          Nunc tempus elit sapien, vitae interdum eros fringilla in.
          Maecenas eu nisl magna.
          Pellentesque dignissim nibh eu nulla ultricies rutrum.
          Quisque tempus libero sit amet ligula auctor, nec iaculis risus dictum.
          Sed vitae faucibus arcu.
          Integer congue dolor eu ipsum rhoncus fermentum.`                
        }]
      }]
    })




    var story2 = new StoryModel({
      "title": "La singularité magique",
      "author": authorID,
      "keywords": ["Quête"],
      "preface": {
        "text": `Saturn apprend de l'Elémentaire de l'Air qu'il est destiné à faire revivre l'Ordre des Magiciens.
        Il devra mener une quête, accompagné d'autres Elms choisis`
      }
    })


    var story3 = new StoryModel({
      "title": "Le conte du Sage",
      "author": authorID,
      "keywords": ["Elem", "Conte"],
      "preface": {
        "text": `Les Elms de l'association dont Saturn est membre sont partis en excursion dans les Bois Dormants.
        Un sage est spécialement venu pour l'occasion, afin de leur raconter une histoire sur les origines d'Elem` 
      }
    })

    StoryModel._create([story1, story2, story3])

  })
}