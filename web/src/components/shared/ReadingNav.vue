<template>
  <v-container>
    <h2>{{post.title}}</h2>
    <h3 v-for="(chapter, i) in post.chapters" :key="chapter.title" v-on:click="goToChapter(i)">
      {{chapter.title}}
    </h3>
  </v-container>
</template>

<script>
export default {
  props: {
    post: Object
  },
  data () {
    return {

    }
  },
  mounted: {

  },
  methods: {
    goToChapter (index) {
      this.$router.push({path: `chap-${index}`})
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
