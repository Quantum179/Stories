<template>
  <div id="blog">
    <topic-nav :topics="topics"></topic-nav>
    <v-container>
      <h1>Blog</h1>
      <exo-carousel :news="news"></exo-carousel>
      <article-list title="trending" :articles="trendingArticles"></article-list>
      <article-list title="latest" :articles="latestArticles"></article-list>
    </v-container>
  </div>
</template>

<script>
import TopicNav from './TopicNav'
import ArticleList from './ArticleList'
import ExoCarousel from '../shared/primitives/ExoCarousel'

import { mapState, mapActions } from 'vuex'

import { actionTypes } from '../../store/modules/blog/types.js'

const { FETCH_BLOG_INFOS } = actionTypes

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['news', 'trendingArticles', 'latestArticles', 'topics'])
  },
  mounted: function () {
    /* this[FETCH_BLOG_INFOS]() */
  },
  methods: {
    ...mapActions('blog', [FETCH_BLOG_INFOS])
  },
  components: {
    ExoCarousel,
    TopicNav,
    ArticleList
  }
}
</script>

<style lang="stylus">

</style>
