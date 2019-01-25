<template>
  <v-tabs v-if="isSmallScreen()" fixed-tabs>
    <v-tab v-for="(category, i) in categories" :key="i"
    ripple @click="updateRoute(category.src)">
      {{category.title}}
    </v-tab>
  </v-tabs>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      categories: []
    }
  },
  computed: {
    ...mapState(['navCategories'])
  },
  mounted () {
    this.categories = this.navCategories
  }
}
</script>

<style lang="stylus" scoped>

</style>
