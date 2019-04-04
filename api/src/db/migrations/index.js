import {User, Article, Story, Chronicle, Topic} from '../models'


import { preface, chapters} from "./data"

export const init = () => {
let authorID = "5c4bfcb15e50992b5440b2b6"
let topicID = "5ca57a773af31d3344a84c7a"



/* 

  let authorID

  var user1 = new UserModel({
    "name": {"first": "Quantum", "last": "Universe"},
    "username": "Quantum",
    "roles": ["Admin"],
    "email": "testmail@gmail.com",
    "password": "testpass"
  })

  UserModel._create(user1)

  var author = new AuthorModel({
    "name": {"first": "Saturn"},
    "authorName": "Saturn",
    "username": "Saturn",
    "roles": ["Admin"],
    "email": "testmail2@gmail.com",
    "password": "testpass"
  }) */

   var paragraphs = [{
    "text": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nam sit amet mauris ut ligula venenatis rhoncus.
    Vestibulum posuere mi eget velit malesuada, nec finibus sem vulputate.
    Mauris vitae placerat ex.
    Integer risus risus, bibendum a justo vitae, malesuada aliquet eros.
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Pellentesque nec purus nibh.
    Mauris auctor eros at ultrices bibendum.
    In feugiat eros nulla, et iaculis enim aliquam eget.
    Sed consectetur, urna et efficitur suscipit, turpis ligula elementum ex, sit amet maximus urna massa et tortor.
    Nunc tempus elit sapien, vitae interdum eros fringilla in.
    Maecenas eu nisl magna.
    Pellentesque dignissim nibh eu nulla ultricies rutrum.
    Quisque tempus libero sit amet ligula auctor, nec iaculis risus dictum.
    Sed vitae faucibus arcu.
    Integer congue dolor eu ipsum rhoncus fermentum.`
  },
  {
    "text": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nam sit amet mauris ut ligula venenatis rhoncus.
    Vestibulum posuere mi eget velit malesuada, nec finibus sem vulputate.
    Mauris vitae placerat ex.
    Integer risus risus, bibendum a justo vitae, malesuada aliquet eros.
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Pellentesque nec purus nibh.
    Mauris auctor eros at ultrices bibendum.
    In feugiat eros nulla, et iaculis enim aliquam eget.
    Sed consectetur, urna et efficitur suscipit, turpis ligula elementum ex, sit amet maximus urna massa et tortor.
    Nunc tempus elit sapien, vitae interdum eros fringilla in.
    Maecenas eu nisl magna.
    Pellentesque dignissim nibh eu nulla ultricies rutrum.
    Quisque tempus libero sit amet ligula auctor, nec iaculis risus dictum.
    Sed vitae faucibus arcu.
    Integer congue dolor eu ipsum rhoncus fermentum.`
  },
  {
    "text": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nam sit amet mauris ut ligula venenatis rhoncus.
    Vestibulum posuere mi eget velit malesuada, nec finibus sem vulputate.
    Mauris vitae placerat ex.
    Integer risus risus, bibendum a justo vitae, malesuada aliquet eros.
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Pellentesque nec purus nibh.
    Mauris auctor eros at ultrices bibendum.
    In feugiat eros nulla, et iaculis enim aliquam eget.
    Sed consectetur, urna et efficitur suscipit, turpis ligula elementum ex, sit amet maximus urna massa et tortor.
    Nunc tempus elit sapien, vitae interdum eros fringilla in.
    Maecenas eu nisl magna.
    Pellentesque dignissim nibh eu nulla ultricies rutrum.
    Quisque tempus libero sit amet ligula auctor, nec iaculis risus dictum.
    Sed vitae faucibus arcu.
    Integer congue dolor eu ipsum rhoncus fermentum.`                
  }]
/* 

  author.save(function (err, author) {
    authorID = author._id
    console.log('author saved')
 */


    var story1 = new Story({
      "title": "Les 12 Fragments",
      "author": authorID,
      "preface": preface,
      "chapters": [{
        "title": "Le conte du Sage",
        "number": 1,
        "paragraphes": [
          {
            "text": `C’était un soir supposé comme les autres dans les Bois Dormants, mais on pouvait observer du ciel une fumée s’échappant du milieu de l’épaisse forêt. Des silhouettes s’étaient rassemblées autour d’un feu de camp et semblaient être à l’écoute d’une d’entre elles. Celle-ci prit la parole d’un ton solennel :`
          },
          {
            "text": `"Elem. Une galaxie pas comme les autres où les êtres vivants possèdent, comme la Nature elle-même, une magie en eux. Cette magie est composée de deux quantas qui s’entremêlent pour créer le monde autour de nous : Mat et Psy."`
          },
          {
            "text": `Un des Elms leva la main pour poser une question. Il prit la parole après un rapide hochement de tête du sage du sage.`
          },
          {
            "text": `« C’est quoi les quantas ? » `
          },
          {
            "text": `Le Sage lui répondit en souriant, comme s’il s’attendait déjà à la question :`
          },
          {
            "text": `"[…] Le quantum Mat représente la matière de la galaxie d’Elem. Une matière de nature magique qui compose l’aura que vous connaissez tous. Le quantum Psy représente la forme de cette matière, sa composition magique."`
          },
          {
            "text": `Les jeunes Elms écoutaient attentivement le sage.`
          },
          {
            "text": `"On dit que le Mat peut varier en densité et pureté. Un Elm très bien entrainé peut créer un Mat presque aussi pur que celui de la nature. À l’inverse, le Psy est unique à chacun. Personne ne peut produire un Psy comparable à celui de la nature, mais certains en maitrisent un très puissant. Chaque être vivant d’Elem est donc une source magique en lui-même."`
          },
          {
            "text": `"Les Elms maitrisaient très bien les deux quantas, au point de développer des magies naturelles variées. Une légende raconte que des Dieux leur ont confié 4 sources magiques, à garder en sécurité au sein d’Elem. Le contact avec les sources avaient rendu les Elms plus puissants que la majeure partie de la galaxie."`
          },
          {
            "text": `Les Elms, très attentifs au conte, laissaient parfois échapper des murmures fascinés.
            `
          },
          {
            "text": `"La magie ancestrale provenant des 4 sources d’énergie était protégée par 12 grandes familles de peuples elmiques, regroupés en 4 Empires : Feu, Terre, Eau et Air. Les familles avaient de nombreux conflits, entre elles ou avec d’autres peuples d’Elem, parfois violents. Cependant, l’équilibre magique a toujours été maintenu grâce à la protection commune des 4 sources."`
          },
          {
            "text": `Le sage s’arrêta, regarda les Elms un par un, puis repris :`
          },
          {
            "text": `"Du moins, c’était le cas avant la Grande Catastrophe...`
          },
          {
            "text": `Les Elms parurent inquiets quelques secondes mais se rassurèrent à l’idée que ce n’était qu’une histoire. De plus, l’ambiance feu de camp était propice aux habituelles histoires terrifiantes. Saturn, qui rangeait son sac tout en écoutant l’histoire au loin, marqua un temps d’arrêt à la mention de la catastrophe. Il ne croyait pas le sage capable de parler d’un sujet aussi proche des Magiciens. Une fois terminé, il mit son sac en bandoulière et se rapprocha du groupe, pendant que le sage continuait son histoire. Celui-ci regarda en direction des tuteurs, qui hochèrent la tête d’un même mouvement.`
          },
          {
            "text": `"L’histoire que je tenais à vous raconter ne fait que commencer. Il existe des choses en ce monde que vos ainés évitent d’aborder avec vous. Certains faits du passé vous ont été présentés rapidement mais vous serez bientôt en âge d’appréhender la vraie vérité. Mon rôle ce soir est de vous guider vers de nouvelles manières de voir les choses. Avec l’autorisation de vos parents ou tuteurs qui ont lu et accepté un contrat magique, je vais vous parler d’une des causes de la guerre."`
          },
          {
            "text": `"Certains des Premiers Elms, soutenus par les Empereurs, ont créé l’Ordre des Magos pour des raisons sombres, par soif de pouvoir. Ils souhaitaient, plus que tout autre, abuser de la puissance des sources. Leurs recherches les poussèrent à créer des sortilèges utilisant l’énergie vitale de ceux qui les prononçaient. Leur magie n’avait rien de naturelle."`
          },
          {
            "text": `"Ils réussirent à dominer les autres peuples grâce à cette magie modifiée et à leur technologie avancée. Les peuples elmiques, dirigés par les différents seigneurs issus des 12 familles, durent se plier aux folies des grandeurs de l’Ordre. Les 12 familles perdirent peu à peu le contrôle de leurs zones d’influence, désormais sous la surveillance directe de l’Ordre."`
          },
          {
            "text": `"Les Premiers Magos finirent par développer des magies plus redoutables que d’habitude, grâce à leur profonde connaissance. Dès lors, le rapport de force avec les autres peuples changea du tout au tout. Aucune puissance ou alliance d’Elem ne pouvait arrêter l’Ordre à cette époque."`
          },
          {
            "text": `"Les Premiers Magos finirent par développer des magies plus redoutables que d’habitude, grâce à leur profonde connaissance. Dès lors, le rapport de force avec les autres peuples changea du tout au tout. Aucune puissance ou alliance d’Elem ne pouvait arrêter l’Ordre à cette époque."`
          },
          {
            "text": `"L’Ordre, conscient de sa suprématie, devint de plus en plus cupide de pouvoir et de magie. Petit à petit, l’alliance Magi, qui dominait les principaux axes commerciaux et politiques d’Elem, devint une dictature. Les peuples liés aux 12 familles, sous le contrôle direct des Magis de l’Ordre, étaient de plus en plus semblables à des ressources servant les desseins de l’ordre."`
          },
          {
            "text": `Un des elms instructeurs s’approcha du feu et s’adressa aux enfants :`
          },
          {
            "text": `N’oubliez pas que la nature est notre amie et notre protectrice. Sans elle, nous ne serions pas ici."`
          },
          {
            "text": `À ces mots, il leva la main et concentra son aura. Le feu commença à frétiller et gagner en intensité.`
          },
          {
            "text": `"La magie est liée à chacun d’entre nous. C’est une faculté capable d’interagir avec la nature. Comprendre l’un revient à comprendre l’autre."`
          },
          {
            "text": `Le sage rajouta à son tour :`
          },
          {
            "text": `"Vouloir utiliser la magie à mauvais escient peut faire de terrible dégâts. En particulier quand on défie la nature."`
          },
          {
            "text": `[…]`
          },
        ]
      }]
    })
 



    var story2 = new Story({
      "title": "La singularité magique",
      "author": authorID,
      "keywords": ["Quête"],
      "preface": {
        "text": `Saturn apprend de l'Elémentaire de l'Air qu'il est destiné à faire revivre l'Ordre des Magiciens.
        Il devra mener une quête, accompagné d'autres Elms choisis`
      },
      "chapters": [{
        "number": 1,
        "paragraphes": paragraphs
      }]
    })


    var story3 = new Story({
      "title": "Le conte du Sage",
      "author": authorID,
      "keywords": ["Elem", "Conte"],
      "preface": {
        "text": `Les Elms de l'association dont Saturn est membre sont partis en excursion dans les Bois Dormants.
        Un sage est spécialement venu pour l'occasion, afin de leur raconter une histoire sur les origines d'Elem` 
      },
      "chapters": [{
        "number": 1,
        "paragraphes": paragraphs
      }]
    }) 

    Story._create(story1) 

    var chronicle1 = new Chronicle({
      "title": "Les 12 Fragments",
      "number": 1,
      "author": authorID,
      "keywords": ["Début de quête"],
      "preface": {
        "text": `Saturn apprend de l'Elémentaire de l'Air qu'il est destiné à faire revivre l'Ordre des Magiciens.
        Il devra mener une quête, accompagné d'autres Elms choisis`
      },
      "chapters": [
        {
        "number": 1,
        "title": "Le conte du Sage",
        "paragraphes": paragraphs
        },
        {
          "number": 1,
          "title": "Le lac des murmures",
          "paragraphes": paragraphs
        },
        {
          "number": 1,
          "title": "Dysfonctionnement",
          "paragraphes": paragraphs
        }      
          ]
    })


    var chronicle2 = new Chronicle({
      "title": "Le royaume d'Atlantis",
      "number": 2,
      "author": authorID,
      "keywords": ["Elem", "Conte"],
      "preface": {
        "text": `Les Elms de l'association dont Saturn est membre sont partis en excursion dans les Bois Dormants.
        Un sage est spécialement venu pour l'occasion, afin de leur raconter une histoire sur les origines d'Elem` 
      },
      "chapters": [{
        "number": 1,
        "paragraphes": paragraphs
      }]
    })

    var chronicle3 = new Chronicle({
      "title": "La bataille d'Islandia",
      "number": 3,
      "author": authorID,
      "preface": {
        "text": `Les Elms de l'association dont Saturn est membre sont partis en excursion dans les Bois Dormants.
        Un sage est spécialement venu pour l'occasion, afin de leur raconter une histoire sur les origines d'Elem` 
      },
      "chapters": [{
        "number": 1,
        "paragraphes": paragraphs
      }]
    })

    Chronicle._create([chronicle1, chronicle2, chronicle3])

    
    var article1 = new Article({
      "title": "Message de bienvenue",
      "author": authorID,
      "paragraphes": paragraphs,
      "topic": topicID
    })




    var article2 = new Article({
      "title": "Message de bienvenue",
      "isTrending": true,
      "author": authorID,
      "paragraphes": paragraphs,
      "topic": topicID
    })

    var article3 = new Article({
      "title": "Les promesses de l'informatique quantique",
      "ratings": [5,4,5,4.2],
      "isTrending": true,
      "author": authorID,
      "paragraphes": paragraphs,
      "topic": topicID
    })

    var article4 = new Article({
      "title": "La singularité technologie",
      "ratings": [5,4,3.5,4.2],
      "author": authorID,
      "paragraphes": paragraphs,
      "topic": topicID
    })

    var article5 = new Article({
      "title": "Les promesses de l'informatique quantique",
      "author": authorID,
      "paragraphes": paragraphs,
      "topic": topicID
    })

    var article6 = new Article({
      "title": "Big Cypher FWI",
      "isTrending": true,
      "author": authorID,
      "paragraphes": paragraphs,
      "topic": topicID
    })


    Article._create([article1, article2, article3, article4, article5, article6])
    .then(res => {
      console.log('articles créés')
    })
    .catch(err => {
      console.log('not ok')
      console.log(err)
    })
/*   }) */
}