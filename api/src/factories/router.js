import express from 'express'
import passport from '../passport'
let actions = ['use', 'get', 'post', 'patch', 'delete']


//TODO: refactor in router directory before merge to develop
export default function(routes) {
  let router = express.Router()
  routes.forEach(r => { //TODO : search if object destructing is possible here
    let {action, endpoint, needsAuth, handler} = r
    let a = action.toString().toLowerCase()
  
    if(actions.includes(a)) {
      if(a == 'use') {
        router.use(handler)
      } else {
        if(needsAuth)
          router[a](endpoint, passport.jwtAuth(), handler)
        else
          router[a](endpoint, handler)      
      }

    } else {
      console.log('error config')
    } 
  })
  return router
}