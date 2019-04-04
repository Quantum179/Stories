<template>
  <v-card raised ripple
  :class="borderTopic">
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
import { createArticleModel } from '../../factories';

export default {
  props: {
    trending: Boolean,
    article: {
      type: Object,
      default: createArticleModel()
    },
  },
  data () {
    return {
      
    }
  },
  computed: {
    authorName () {
      return this.article.author.authorName
    },
    borderTopic () {
      debugger
      let color
      switch (this.article.topic.name) {
        case "Musique":
          color = 'blue'
          break;
      
        default:
          color = 'black'
          break;
      }
      return {[`border-${color}`]: true}
    }
  },
  mounted () {
    //todo : add post date, topic in subtile
  }
}
</script>

<style lang="stylus">
//TODO : move borders styles et mixins inside stylus and mixins folder
@import '../../stylus/main'

</style>
