import pass from 'passport'
import jwtStrategy from './strategies/jwtStrategy'
//import twitterStrategy from './strategies/twitterStrategy'
//import facebookStrategy from './strategies/facebookStrategy'


pass.use(jwtStrategy)
//_passport.use(facebookStrategy)
//_passport.use(twitterStrategy)
//_passport.use(instagramStrategy)


export const jwtAuth = function(permissions) {
    return pass.authenticate('jwt', {session: false})
}

export const createToken = function(user) {
  return jwt.sign({email:user.email, idUser:user._id}, SECRET, { expiresIn: '1h' }) //TODO : add env variables (hash and jwt secrets)
}

export const passport = pass
