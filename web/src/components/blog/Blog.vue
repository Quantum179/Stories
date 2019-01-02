<template>
  <div id="blog">
    <topic-nav :topics="topics"></topic-nav>
    <v-container fluid>
      <v-layout row>
        <h1>Blog</h1>
        <exo-carousel :news="news"></exo-carousel>
        <div class="trending">
          <article-card v-for="(article, i) in trendingArticles" :key="i" :article="article" @click="openArticle(i)"></article-card>
        </div>
        <div class="latest">
          <article-card v-for="(article, i) in latestArticles" :key="i" :article="article" @click="openArticle(i)"></article-card>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TopicNav from './TopicNav'
import ArticleCard from './ArticleCard'
import ExoCarousel from '../shared/primitives/ExoCarousel'

import { createNamespacedHelpers } from 'vuex'
import { actionTypes } from '../../store/modules/blog/types.js'

const { mapState, mapActions } = createNamespacedHelpers('blog')
const { FETCH_BLOG_INFOS } = actionTypes

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['news', 'trendingArticles', 'latestArticles', 'topics'])
  },
  mounted () {
    this[FETCH_BLOG_INFOS]()
  },
  methods: {
    ...mapActions([FETCH_BLOG_INFOS])
  },
  components: {
    ExoCarousel,
    TopicNav,
    ArticleCard
  }
}
</script>

<style lang="stylus">

</style>
