<template>
  <div id="topic_details">
    <h1>{{topic.name}}</h1>
    <v-container>
      <v-layout>
          <v-flex v-for="(article, i) in topic.articles" :key="i"
          xs12 sm6 md4 lg4>
            <article-card :article="article"></article-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard'
export default {
  data() {

  },
  components: {
    ArticleCard
  }
}
</script>

<style lang="stylus">

</style>
