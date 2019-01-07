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
    console.log(req.data)
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

    var preface1 = new ParagraphModel({
      "sentences": [
        "Les Magiciens Explorateurs sont revenus de leur mission spéciale.",
        "Ils ont fait une grande découverte mais n'ont pas pu fournir de détails durant le voyage.",
        "Une cérémonie officielle est organisée, tous les Elms sont invités."
      ] 
    })

    var paragraph1 = new ParagraphModel({
      "sentences": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        "Nam sit amet mauris ut ligula venenatis rhoncus.", 
        "Vestibulum posuere mi eget velit malesuada, nec finibus sem vulputate.",
        "Mauris vitae placerat ex.", 
        "Integer risus risus, bibendum a justo vitae, malesuada aliquet eros.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        "Pellentesque nec purus nibh.",
        "Mauris auctor eros at ultrices bibendum.",
        "In feugiat eros nulla, et iaculis enim aliquam eget.",
        "Sed consectetur, urna et efficitur suscipit, turpis ligula elementum ex, sit amet maximus urna massa et tortor.",
        "Nunc tempus elit sapien, vitae interdum eros fringilla in.",
        "Maecenas eu nisl magna.",
        "Pellentesque dignissim nibh eu nulla ultricies rutrum.",
        "Quisque tempus libero sit amet ligula auctor, nec iaculis risus dictum.",
        "Sed vitae faucibus arcu.",
        "Integer congue dolor eu ipsum rhoncus fermentum."
      ]
    })

    var paragraph2 = new ParagraphModel({
      "sentences": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        "Nam sit amet mauris ut ligula venenatis rhoncus.", 
        "Vestibulum posuere mi eget velit malesuada, nec finibus sem vulputate.",
        "Mauris vitae placerat ex.", 
        "Integer risus risus, bibendum a justo vitae, malesuada aliquet eros.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        "Pellentesque nec purus nibh.",
        "Mauris auctor eros at ultrices bibendum.",
        "In feugiat eros nulla, et iaculis enim aliquam eget.",
        "Sed consectetur, urna et efficitur suscipit, turpis ligula elementum ex, sit amet maximus urna massa et tortor.",
        "Nunc tempus elit sapien, vitae interdum eros fringilla in.",
        "Maecenas eu nisl magna.",
        "Pellentesque dignissim nibh eu nulla ultricies rutrum.",
        "Quisque tempus libero sit amet ligula auctor, nec iaculis risus dictum.",
        "Sed vitae faucibus arcu.",
        "Integer congue dolor eu ipsum rhoncus fermentum."
      ]
    })

    var paragraph3 = new ParagraphModel({
      "sentences": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        "Nam sit amet mauris ut ligula venenatis rhoncus.", 
        "Vestibulum posuere mi eget velit malesuada, nec finibus sem vulputate.",
        "Mauris vitae placerat ex.", 
        "Integer risus risus, bibendum a justo vitae, malesuada aliquet eros.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        "Pellentesque nec purus nibh.",
        "Mauris auctor eros at ultrices bibendum.",
        "In feugiat eros nulla, et iaculis enim aliquam eget.",
        "Sed consectetur, urna et efficitur suscipit, turpis ligula elementum ex, sit amet maximus urna massa et tortor.",
        "Nunc tempus elit sapien, vitae interdum eros fringilla in.",
        "Maecenas eu nisl magna.",
        "Pellentesque dignissim nibh eu nulla ultricies rutrum.",
        "Quisque tempus libero sit amet ligula auctor, nec iaculis risus dictum.",
        "Sed vitae faucibus arcu.",
        "Integer congue dolor eu ipsum rhoncus fermentum."
      ]
    })
    let id1, id2, id3

    paragraph1.save((err, paragraph) => {
      id1 = paragraph._id
    })
    paragraph2.save((err, paragraph) => {
      id2 = paragraph._id
    })
    paragraph3.save((err, paragraph) => {
      id3 = paragraph._id
    })


    setTimeout(function(){ 
      console.log('timeout start')
      let chapter = new ChapterModel({
        "paragraphs": [id1, id2, id3],
        "title": "La grande annonce"
      })
      chapter.save((err, chapter) => {
        setTimeout(function(){ 
          console.log('test2')
          preface1.save((err, paragraph) => {
            var story1 = new StoryModel({
              "title": "Le retour des Explorateurs",
              "author": authorID,
              "keywords": ["Exploration"],
              "preface": paragraph._id,
              "chapters": [chapter._id]
            })
            story1.save((err, story) => {
              console.log('story 1 saved')
            })
          })



        }, 7000);
      })
    }, 7000);


    console.log('continue')




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