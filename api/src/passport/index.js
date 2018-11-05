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

export const passport = pass
