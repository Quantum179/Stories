<template>
  <div id='home'>
    <v-flex xs12 justify-center>
      <h1 id="home-title">Accueil</h1>
    </v-flex>
    <v-container>
        <v-flex xs12>
          <v-layout column wrap>
            <h2>Bienvenue sur Stories</h2>
            <p>Stories est un blog regroupant des nouvelles et des chroniques issues de l'univers fictif d'Elem, la galaxie magique.</p>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <h2>Publications récentes</h2>
          <v-layout row wrap>
            <v-flex v-for="(post, key) in latestPosts" :key="key"
            xs4>
              <post-card :post="post"></post-card>
            </v-flex>
          </v-layout>
        </v-flex>
    </v-container>  
  </div>
</template>

<script>
/* import ExosoftOpening from './ExosoftOpening'
import HomeOpening from './HomeOpening'
import CategoryCard from './CategoryCard' */
import PostCard from './PostCard'

import { createNamespacedHelpers } from 'vuex'
import { actionTypes } from '../../store/modules/home/types'

const { mapState, mapActions } = createNamespacedHelpers('home')
const { FETCH_HOME_INFOS } = actionTypes

export default {
  data () {
    return {
      display: 'home'
    }
  },
  computed: {
    ...mapState(['news', 'latestPosts'])
  },
  mounted () {
    /* this[FETCH_HOME_INFOS]() */
    // TODO: $('#home').onScroll to set selected category
    // TODO: add transition animation for categories
  },
  methods: {
    ...mapActions({
      fetchInfos: FETCH_HOME_INFOS
    })
  },
  components: {
    PostCard
  }
}
</script>

<style lang="stylus">

#home
  height 2000px

#home-title
  font-size 50px

</style>
