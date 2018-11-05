
# Architecture

Client version of an API/Client system. All importants actions must be registered and state must stay immutable until validated mutation (Vuex) happens.

# Run application
```
ngrok http 8080 -host-header="localhost:8080"


```

# TODOS

- use constants strings for Vuex store methods
- override v-btn active and focus styles
- think about vuetify important overrides and do it in main.styl
- use sub-routers to display sub components ()
- implement "ExoList" and ExoButton first
- wraps router-link (Adapter design pattern) to simplify the tag creation (pass tag name and css classes as props)
- try to add a vue command for new routes in vue cli (then propose a PR in github repo)
- add translations for english (not urgent at all)
- define state of the application and decide which data will be shared betweens all clients (so stored in the database) and which data will be specific to Desktop client
- use CSS Grid (or Vuetify layout) to create original lists of posts 
- Define global variables (like $ = document.querySelector) : https://dev.to/terabaud/snippets-for-vanilla-js-coding-19cg

# Research and Discover

- React best practices : https://javascriptplayground.com/habits-of-successful-react-components/
- Custom UI vs UI framework links :
 - https://css-tricks.com/design-systems-building-future/
 - https://medium.freecodecamp.org/how-to-build-a-design-system-with-a-small-team-53a3276d44ac
 - https://www.canva.com/learn/website-color-schemes/
 - Inspiration : 
 https://2017.saturized.com/ 
 https://codepen.io/andybarefoot/pen/PBPrex
 - https://fr.vuejs.org/v2/guide/components-registration.html
 - https://flaviocopes.com/vue-introduction/
- Gradients inspirations : 
 - https://atomiks.github.io/30-seconds-of-css/
 - http://lea.verou.me/css3patterns/#starry-night
 - https://css-tricks.com/easing-linear-gradients/
 - https://css-tricks.com/snippets/css/css-linear-gradient/
- Home page designs for inspiration and key concepts : https://blog.hubspot.com/blog/tabid/6307/bid/34006/15-examples-of-brilliant-homepage-design.aspx

