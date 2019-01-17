<template>
<div>
  <chronicle-nav></chronicle-nav>
  <router-view></router-view>
</div>
</template>

<script>
import ChronicleNav from './ChronicleNav'
export default {
  data () {
    return {

    }
  },
  components: {
    ChronicleNav
  }
}
</script>

<style lang="stylus" scoped>

</style>
