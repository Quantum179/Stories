import passport from 'passport'
import passportJWT from 'passport-jwt'
var ExtractJwt = passportJWT.ExtractJwt
var JWTStrategy = passportJWT.Strategy
var jwtOptions = {}

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = 'storieswebsite'

export default new JWTStrategy(jwtOptions, function(payload, done) {
    //TODO Quantum : validate request before query
    //TODO Quantum : database User.find(uuid)
    //TODO Quantum : clean user before sending response

    var user = {}
    if (user)
        return done(null, user)
    else
        return done(new Error("User not found"), null)
})
