import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import { Article } from '../../db/models'

export const getBlog = (req, res, next) => {
  let { fields, ...out } = req.data

  Article._getMany(fields)
    .then(articles => {
      res.locals.articles = articles
    })
    .catch(err => {

    })
}

export const getTopics = (req, res, next) => {

}

export const getTopic = (req, res, next) => {
  let { topic } = req.data
  Article._getMany(topic, fields)
    .then(articles => {

    })
    .catch(err => {
    })
}

export const getArticles = (req, res, next) => {
  let { params, options } = req.data

  Article._getMany(params, options)
    .then(articles => {
      if (!articles || articles.length === 0) {
        next({code: NOT_FOUND})
      } else {
        res.status(OK)
        res.locals.latestArticles = articles
        next()
      }
    })
    .catch(err => {
      next({err: err, code: BAD_REQUEST})
    })
}

export const getArticle = (req, res, next) => {
  let { id } = req.params
  
  Article._getByID(id)
    .then(article => {
      if(!article) {
        next({code: NOT_FOUND})
      } else {
        res.status(200)
        res.locals.article = article
        next()
      }
    })
    .catch(err => {
      next({err: err, code: BAD_REQUEST})
    })
}

export const postArticle = (req, res, next) => {
  let { article } = req.data

  Article._create(article)
    .then(savedArticle => {

    })
    .catch(err => {

    })
}