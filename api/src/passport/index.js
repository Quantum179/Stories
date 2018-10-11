import passport from 'passport'
import jwtStrategy from './strategies/jwtStrategy'
//import twitterStrategy from './strategies/twitterStrategy'
//import facebookStrategy from './strategies/facebookStrategy'


passport.use(jwtStrategy)
//_passport.use(facebookStrategy)
//_passport.use(twitterStrategy)
//_passport.use(instagramStrategy)


const jwtAuth = function(permissions) {
    return passport.authenticate('jwt', {session: false})
}

export default {
    passport,
    jwtAuth
}