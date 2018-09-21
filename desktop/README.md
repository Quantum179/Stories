
# Architecture

Client version of an API/Client system. All importants actions must be registered and state must stay immutable until validated mutation (Vuex) happens.

# TODOS

- use constants strings for Vuex store methods
- find a better way to center login-btn in header
- override v-btn active and focus styles
- think about vuetify important overrides 
- check device type to fix footer if mobile (or switch to mobile footer)
- think about what to put in footer
- check the current route to fix header if not home
- decide if sub-components folder is a good idea (for now, I found that boring to use)
- refactor architecture : one folder for main pages, shared comps and view models (like Story, Reading, Article)
- use router-view to display sub components qnd think about inherited styles
- implement "ExoList"
- wraps router-link (Adapter design pattern) to simplify the tag creation (pass tag name and css classes as props)
- try to add a vue command for new routes in vue cli (then propose a PR in github repo)
- add translations for english (not urgent at all)

# Research and Discover

- React best practices : https://javascriptplayground.com/habits-of-successful-react-components/
- Custom UI vs UI framework links :
 - https://css-tricks.com/design-systems-building-future/
 - https://medium.freecodecamp.org/how-to-build-a-design-system-with-a-small-team-53a3276d44ac
 - Define global variables (like $ = document.querySelector) : https://dev.to/terabaud/snippets-for-vanilla-js-coding-19cg
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

