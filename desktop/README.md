
# Architecture

Client version of an API/Client system. All importants actions must be registered and state must stay immutable until validated mutation (Vuex) happens.

# TODOS

- find a better way to center login-btn in header
- override v-btn active and focus styles
- think about vuetify important overrides and do it in main.styl
- check device type to fix footer if mobile (or switch to mobile footer)
- think about what to put in footer
- check the current route to fix header if not home
- decide if sub-components folder is a good idea (for now, I found that boring to use)
- refactor architecture : one folder for main pages, shared comps and view models (like Story, Reading, Article)
- use router-view to display sub components and think about inherited styles
- implement "ExoList" and ExoButton first
- wraps router-link (Adapter design pattern) to simplify the tag creation (pass tag name and css classes as props)
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
- Home page designs for inspiration and key concepts : https://blog.hubspot.com/blog/tabid/6307/bid/34006/15-examples-of-brilliant-homepage-design.aspx

