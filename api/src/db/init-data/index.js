/* import usersData from "./users"
import storiesData from "./stories"

let data = {}
data.users = usersData
data.stories = storiesData

export default data */


import model from '../models/storyModel'
let data = [
  {
    title: 'Première histoire',
    preface: "Préface de test pour le développement de la partie \"stories\" de l'application web",
    description: "Voici la premiere histoire de test que l'on va retrouver sur le site de Stories"
  },
  {
    title: 'Test Story 2',
    preface: "Préface de test pour le développement de la partie \"stories\" de l'application web",
    description: "Voici la premiere histoire de test que l'on va retrouver sur le site de Stories"
  },
  {
    title: 'Test story 3',
    preface: "Préface de test pour le développement de la partie \"stories\" de l'application web",
    description: "Voici la premiere histoire de test que l'on va retrouver sur le site de Stories"
  },
  {
    title: 'Test story 4',
    preface: "Préface de test pour le développement de la partie \"stories\" de l'application web",
    description: "Voici la premiere histoire de test que l'on va retrouver sur le site de Stories"
  },
  {
    title: 'Première feuille',
    preface: "Préface de test pour le développement de la partie \"stories\" de l'application web",
    description: 'Mon premier est le cadet de Full Metal Alchemist'
  },
  {
    title: 'Test story 5',
    preface: "Préface de test pour le développement de la partie \"stories\" de l'application web",
    description: "Voici la premiere histoire de test que l'on va retrouver sur le site de Stories"
  }
]
let index = 0

model.find({}).then(stories => {
  stories.map(s => {
    let story = data[index]
    s.preface
    s.save()
  })
})