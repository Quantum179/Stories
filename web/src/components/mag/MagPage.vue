<template>
  <div id="mag_page">
    <mag-nav></mag-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MagNav from './MagNav'

export default {
  components: {
    MagNav
  }
}
</script>

<style lang="stylus" scoped>

</style>
