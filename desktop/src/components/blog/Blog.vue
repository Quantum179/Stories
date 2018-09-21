<template>
  <div id="blog">
    <v-container>
      <blog-carousel :news="news"></blog-carousel>
      <topic-list :topics="topics"></topic-list>
      <article-list :articles="articles"></article-list>
    </v-container>
  </div>
</template>

<script>
import TopicList from './TopicList'
import ArticleList from './ArticleList'

export default {
}
</script>

<style lang="stylus">

</style>
