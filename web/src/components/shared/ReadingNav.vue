<template>
  <v-container>
    <h2>{{post.title}}</h2>
    <v-list>
<!--       <v-card v-if="chapter.chapters == null" 
      v-for="(chapter, i) in post.chapters" :key="i" 
      :chapter="chapter"></v-card>
      <v-expansion-panel v-else>
        <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
            <v-card></v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>     -->
    </v-list>
  </v-container>
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
  mounted: {

  },
  methods: {
    set (index) {
      this.$router.push({path: `chap-${index}`})
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
