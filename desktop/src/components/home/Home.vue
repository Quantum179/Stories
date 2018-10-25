<template>
  <div id="home">
    <exosoft-opening v-if="display === 'exo'"></exosoft-opening>
    <home-opening v-else-if="display === 'intro'"></home-opening>
    <div v-else-if="display === 'home'">
        <div class="anim-item" v-if="selectedCategory == null">
            <exo-carousel :slides="news"></exo-carousel>
            <post-list :posts="latestPosts"></post-list>
        </div>
        <div class="anim-item" v-if="selectedCategory !== null && selectedCategory.name == category.name"
          v-for="category in categories"
          :key="category.name">
            <category-card :category="category"></category-card>
        </div>
    </div>
  </div>
</template>

<script>
import ExosoftOpening from './ExosoftOpening'
import HomeOpening from './HomeOpening'
import ExoCarousel from '../shared/primitives/ExoCarousel'
import CategoryCard from './CategoryCard'
import PostList from '../shared/post/PostList'

import {mapState, mapActions} from 'vuex'
import {actionTypes} from '../../store/modules/home/types'

const { FETCH_HOME_INFOS } = actionTypes

export default {
  data () {
    return {
      display: 'home'
    }
  },
  computed: {
    ...mapState('home', ['news', 'latestPosts', 'categories', 'selectedCategory'])
  },
  mounted () {
    /* this[FETCH_HOME_INFOS]() */
    // TODO: $('#home').onScroll to set selected category
  },
  methods: {
    ...mapActions('home', [FETCH_HOME_INFOS])
  },
  components: {
    ExosoftOpening,
    HomeOpening,
    ExoCarousel,
    CategoryCard,
    PostList
  }
}
</script>

<style lang="stylus">

#home
  height 2000px
</style>
