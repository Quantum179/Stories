<template>
  <v-container fluid>
    <h1 v-if="chapter.title != null">{{chapter.title}}</h1>
    <v-layout row>
      <paragraph v-for="(par, i) in chapter.paragraphes" :key="i" :paragraph="par"></paragraph>
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
  components: {
    Paragraph
  }
}
</script>

<style lang="stylus">

</style>
