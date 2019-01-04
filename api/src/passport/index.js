import passport from 'passport'
import jwtStrategy from './strategies/jwtStrategy'
import jwt from 'jsonwebtoken'
import { SECRET } from '../constants'

passport.use(jwtStrategy)
//_passport.use(facebookStrategy)
//_passport.use(twitterStrategy)
//_passport.use(instagramStrategy)


export const authGuard = function(roles) {
    return passport.authenticate('jwt', {session: false})

/*     if (Array.isArray(roles)) {

    } else if (roles != null) {

    } */
}

export const createToken = function(user) {
  return jwt.sign({idUser:user._id}, SECRET, { expiresIn: '1h' }) //TODO : add env variables (hash and jwt secrets)
  // todo: add roles to token
}

export default passport
