import passport from 'passport'
import passportJWT from 'passport-jwt'
var ExtractJwt = passportJWT.ExtractJwt
var JWTStrategy = passportJWT.Strategy
import {SECRET} from '../../constants'
import models from '../../db/models'

let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = SECRET

export default new JWTStrategy(jwtOptions, function(payload, done) {
    models.User.getById({id: payload.id})
        .then(u => {
            if(!u) {
                return done(new Error("User not found"), false)
            } else {
                let user = u.toObject()
                return done(null, user)
            }
        })
        .catch(err => {
            return done(err, false)
        })
})

