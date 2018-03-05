import jwtStrategy from './strategies/jwtStrategy'
import twitterStrategy from './strategies/twitterStrategy'
import facebookStrategy from './strategies/facebookStrategy'

// TODO Quantum : Facebook, Twitter, Instagram and others strategies

// auth.js
export default function() {

    passport.use(jwtStrategy)
    passport.use(facebookStrategy)
    passport.use(twitterStrategy)

    return {
        initialize: function() {
            return passport.initialize()
        },
        session: function() {
            return passport.session()
        }
        authenticate: function() {
            return passport.authenticate("jwt")
        }
    }
}
