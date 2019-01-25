<template>
  <div id="blog_home">
    <v-flex>
      <h1>Blog</h1>
    </v-flex>
    <v-container>
      <v-layout>
        <v-flex xs12 sm12 md6 lg8>
          <v-layout>
            <v-flex v-for="(article, i) in firstArticles" :key="i"
            xs6 sm4 md6 lg4>
              <article-card :article="article" @click="readArticle(article)"></article-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm12 md6 lg4>
          <v-layout column>
            <v-flex v-for="(article, i) in trendingArticles" :key="i">
              <article-card trending :article="article" @click="readArticle(article)"></article-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex v-for="(article, i) in otherArticles" :key="i"
        xs6 sm4 md4 lg3>
          <article-card :article="article" @click="readArticle(article)"></article-card>
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

      }
    }
  },
  computed: {
    ...mapState(['news', 'trendingArticles', 'latestArticles']),

    firstArticles () {
      return null
      // todo : return sliced latestArticles (use breapoints to determine lenght)
    },
    otherArticles () {
      return null
    }
  },
  mounted () {
    this.fetchInfos()
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
      this.updateRoute('article', {id: article.id})
    }
  },
  components: {
    ArticleCard
  }
}
</script>

<style lang="stylus">

</style>
