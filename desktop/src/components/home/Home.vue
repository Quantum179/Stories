<template>
  <div id="home">
    <exocraft-opening v-if="display === 'exo'"></exocraft-opening>
    <home-opening v-else-if="display === 'intro'"></home-opening>
    <v-container v-else-if="display === 'home'">
      <div class="anim-item">
        <exo-carousel :slides="news"></exo-carousel>
        <post-list :posts="latestPosts"></post-list>      
      </div>
      <category-card class="anim-item" v-for="category in categories" :key="category.name" :category="category"></category-card>
    </v-container>
  </div>
</template>

<script>
import ExocraftOpening from './ExocraftOpening'
import HomeOpening from './HomeOpening'
import ExoCarousel from '../shared/primitives/ExoCarousel'
import CategoryCard from './CategoryCard'
import PostList from '../shared/post/PostList'

export default {
  data () {
    return {
      display: 'home',
      news: [],
      categories : [],
      latestPosts : []
    }
  },
  mounted: function() {
    this.state.home.dispatch('getNews')
  },
  methods: {

  },
  components: {
    ExocraftOpening,
    HomeOpening,
    ExoCarousel,
    CategoryList,
    PostList
  }
}
</script>

<style lang="stylus">

#home
  height 2000px
</style>
