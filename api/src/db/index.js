//DEV import
import data from './init-data'
//END DEV import
import models from './models'
var testEnv = 'DEV'
import mongoose from 'mongoose'

var init = function() {
    data.stories[0].author = mongoose.Types.ObjectId();
    console.log(data.stories)
    models.Story.addStories(data.stories)
    .then(function(stories) {
      console.log("default stories successfully added.")
    })
    .catch(function(err) {
      console.log('oops : ' + err)
    })
}

export default init


''

//TODO Quantum : export all models classes for app.set
