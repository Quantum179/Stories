<template>
  <v-container>
    <post-card v-for="post in posts" :key="post"></post-card>
  </v-container>
</template>

<script>
import PostCard from './PostCard'
export default {
  data: function () {
    return {
      posts: []
    }
  },
  components: {
    PostCard
  }
}
</script>

<style lang="stylus">

</style>
