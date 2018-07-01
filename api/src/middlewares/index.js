import sanitizer from 'sanitizer'

//Methods
function escapeRequest(data) {
    // TODO Quantum : validate request with routing params
    // TODO Quantum : R&D in mongoose validations and how to use it with validator module
    sanitizer.escape(data)
    return Object.assign({}, data)
  }


//Export variables
let sanitizerMiddleware = function(req, res, next) {
    req = escapeRequest(req)
    next()
}

export {
    sanitizerMiddleware
}