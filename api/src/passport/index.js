import passport from 'passport'
import jwtStrategy from './strategies/jwtStrategy'

passport.use(jwtStrategy)
//_passport.use(facebookStrategy)
//_passport.use(twitterStrategy)
//_passport.use(instagramStrategy)


export const authGuard = function(permissions) {
    return passport.authenticate('jwt', {session: false})

/*     if (Array.isArray(permissions)) {

    } else if (permissions != null) {

    } */
}

export const createToken = function(user) {
  return jwt.sign({email:user.email, idUser:user._id}, SECRET, { expiresIn: '1h' }) //TODO : add env variables (hash and jwt secrets)
}

export default passport
