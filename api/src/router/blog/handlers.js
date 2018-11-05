import {OK, CREATED, BAD_REQUEST, NOT_FOUND} from 'http-status-codes'
import ArticleModel from '../../db/models/articleModel'

export const getBlog = (req, res, next) => {
    let {fields, ...out} = req.data
    ArticleModel._getMany(fields)
        .then(posts => {
            res.locals.posts = posts
        })
        .catch(err => {

        })

}

export const getTopics = (req, res, next) => {

}

export const getTopic = (req, res, next) => {
    let {topic} = req.data
    ArticleModel._getMany(topic, fields)
        .then(posts => {

        })
        .catch(err => {

        })
}

export const getArticle = (req, res, next) => {
    let {id} = req.data
    ArticleModel._getById(id)
        .then(article => {

        })
        .catch(err => {

        })
}

