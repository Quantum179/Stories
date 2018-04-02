//DEV import
import data from './init-data'
//END DEV import
import models from './models'

var testEnv = 'DEV'

if(testEnv == 'DEV') {
  models.UserModel.addUsers(data.users, () => {
    console.log("default users successfully added.")
  })
  models.StoryModel.addStories(data.stories, () => {
    console.log("default stories successfully added.")
  })
}


//TODO Quantum : export all models classes for app.set
