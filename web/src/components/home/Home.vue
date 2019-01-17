<template>
  <div id='home'>
    <exosoft-opening v-if="display === 'exo'"></exosoft-opening>
    <home-opening v-else-if="display === 'intro'"></home-opening>
    <v-container fluid v-else-if="display === 'home'" id='home'>
      <v-layout row>
        <v-flex xs12 sm12 class="anim-item" v-if="selectedCategory === null">
          <v-layout column>
            <v-flex>
              <h2>Accueil</h2>
              <exo-carousel :slides="news"></exo-carousel>            
            </v-flex>
            <v-container>
              <v-layout row>
                <v-flex xs6>
                  <div class="latest">
                    <h3>Publication récentes</h3>
                    <post-card v-for="(post, i) in latestPosts" :key="i" :post="post"></post-card>
                  </div>
                </v-flex>
                <v-flex xs6>
                  <div class="trending">
                    <h3>Publications populaires</h3>
                    <post-card v-for="(post, i) in trendingPosts" :key="i" :post="post"></post-card>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm12 class="anim-item" v-if="selectedCategory !== null"> 
          <v-layout row>
            <category-card :category="selectedCategory"></category-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>  
  </div>
</template>

<script>
import ExosoftOpening from './ExosoftOpening'
import HomeOpening from './HomeOpening'
import ExoCarousel from '../shared/primitives/ExoCarousel'
import CategoryCard from './CategoryCard'

import { createNamespacedHelpers } from 'vuex'
import {actionTypes} from '../../store/modules/home/types'

const {mapState, mapActions} = createNamespacedHelpers('home')
const { FETCH_HOME_INFOS } = actionTypes

export default {
  data () {
    return {
      display: 'home'
    }
  },
  computed: {
    ...mapState(['news', 'latestPosts', 'trendingPosts', 'categories', 'selectedCategory'])
  },
  mounted () {
    /* this[FETCH_HOME_INFOS]() */
    // TODO: $('#home').onScroll to set selected category
    // TODO: add transition animation for categories
  },
  methods: {
    ...mapActions([FETCH_HOME_INFOS])
  },
  components: {
    ExosoftOpening,
    HomeOpening,
    ExoCarousel,
    CategoryCard
  }
}
</script>

<style lang="stylus">

#home
  height 2000px
</style>
