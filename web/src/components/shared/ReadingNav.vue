<template>
  <v-card id="reading_nav" raised>
    <v-layout column>
      <v-flex justify-center>
        <h2>Table des matières</h2>    
      </v-flex>
      <v-divider></v-divider>
      <v-flex mt-3>
        <v-layout column align-center>
          <h4 v-for="chapter in post.chapters" :key="chapter.number"
          class="pointer nav_chapter"
          @click="goToChapter(chapter.number)">
            {{`Chapitre ${chapter.number}`}}
          </h4>
        </v-layout>
      </v-flex>    
    </v-layout>

  </v-card>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
    goToChapter(number) {
      // todo : scroll to selected chapter (maybe add selected ChapterID in store)
    }
  }
}
</script>

<style lang="stylus" scoped>
#reading_nav
  width 100%
  max-height 70vh
  border-radius 5px
  background-color #E8E8E8

.nav_chapter:hover
  background-color black 
  color white
</style>
