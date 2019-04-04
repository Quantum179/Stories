<template>
  <div id="blog_home">
    <v-flex xs12 justify-center>
      <h1>Blog</h1>
    </v-flex>
    <v-container>
      <v-layout xs12 row wrap>
        <v-flex v-for="(article, i) in latestArticles" :key="i"
        xs6 sm4 md6 lg4
        class="article-flex pointer pa-3"
        @click="readArticle(article)">
          <article-card :article="article"></article-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard'

import { createNamespacedHelpers } from 'vuex'
import { actionTypes, mutationTypes } from '../../store/modules/blog/types.js'

const { mapState, mapActions, mapMutations } = createNamespacedHelpers('blog')
const { FETCH_BLOG_INFOS } = actionTypes
const { SET_SELECTED_ARTICLE } = mutationTypes

export default {
  data () {
    return {
    params: {
        populate: [
          { path: 'author', select: 'authorName' },
          { path: 'topic', select: 'name'}
        ]
      }
    }
  },
  computed: {
    ...mapState(['news', 'trendingArticles', 'latestArticles'])
  },
  mounted () {
    this.fetchInfos(this.params)
  },
  methods: {
    ...mapActions({
      fetchInfos: FETCH_BLOG_INFOS
    }),
    ...mapMutations({
      setSelectedArticle: SET_SELECTED_ARTICLE
    }),

    readArticle (article) {
      this.setSelectedArticle(article.id)
      this.updateRoute(`/blog/${article.id}`)
    }
  },
  components: {
    ArticleCard
  }
}
</script>

<style lang="stylus">
</style>
