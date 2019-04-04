<template>
  <v-tabs ref="tabs" fixed-tabs :hide-slider="hideSlider">
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
    ...mapState(['navCategories']),

    hideSlider () {
      return this.$route.name === 'home' || this.$route.name === 'login'
    }
  },
  mounted () {
    this.categories = this.navCategories
  }
}
</script>

<style lang="stylus" scoped>

</style>
