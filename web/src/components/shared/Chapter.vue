<template>
  <v-container class="chapter">
    <h2 v-if="chapter.title || isNamed">{{completeTitle}}</h2>
    <v-layout column>
      <v-flex v-for="(par, i) in chapter.paragraphes" :key="i"
      xs12 sm12 md12 lg12>
        <paragraph  
        :paragraph="par"></paragraph>      
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Paragraph from '../shared/Paragraph'
export default {
  props: {
    chapter: Object,
    isNamed: Boolean
  },
  data () {
    return {

    }
  },
  computed: {
    completeTitle () {
      const title = this.chapter.title
      return `Chapitre ${this.chapter.number}${title != null ? " : " + title : ""}`
    }
  },
  mounted () {

  },
  components: {
    Paragraph
  }
}
</script>

<style lang="stylus">
.chapter
  max-width 80%
</style>
