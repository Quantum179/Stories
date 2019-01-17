<template>
  <v-container fluid>
    <h3 v-if="chapter.title != null">{{chapter.title}}</h3>
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
  },
  data () {
    return {

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

</style>
