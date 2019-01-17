<template>
  <v-card raised>
    <v-card-title primary-title>
      <div>
        <h3>{{article.title}}</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-flex>{{authorName}}</v-flex>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    trending: Boolean,
    article: Object
  },
  data () {
    return {
      
    }
  },
  computed: {
    authorName () {
      return this.article.author.authorName
    }
  },
  mounted () {
    //todo : add post date, topic in subtile
  }
}
</script>

<style lang="stylus">

</style>
