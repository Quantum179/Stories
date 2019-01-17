<template>
  <div id="blog">
    <topic-nav :topics="topics"></topic-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import TopicNav from './TopicNav'

export default {
  components: {
    TopicNav
  }
}
</script>

<style lang="stylus" scoped>

</style>
