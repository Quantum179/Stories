<template>
  <v-container>
    <post-card v-for="post in posts" :key="post"></post-card>
  </v-container>
</template>


<script>
import PostCard from './PostCard'
export default {
  data: function() {
    return {
      posts: []
    }
  }
}
</script>


<style lang="stylus">

</style>
