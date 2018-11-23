import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import ArticleModel from '../../db/models/articleModel'

export const getBlog = (req, res, next) => {
    let { fields, ...out } = req.data
    ArticleModel._getMany(fields)
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
    ArticleModel._getMany(topic, fields)
        .then(articles => {

        })
        .catch(err => {
        })
}

export const getArticles = (req, res, next) => {
  let { fields, ...out } = req.data
  ArticleModel._getMany(fields)
      .then(articles => {
          res.locals.articles = articles
      })
      .catch(err => {

      })

}

export const getArticle = (req, res, next) => {
    let { id } = req.data
    ArticleModel._getById(id)
        .then(article => {

        })
        .catch(err => {

        })
}

export const postArticle = (req, res, next) => {
  let { article } = req.data
  ArticleModel._create(article)
      .then(savedArticle => {

      })
      .catch(err => {

      })
}
