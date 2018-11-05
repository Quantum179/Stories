<template>
  <v-toolbar app id="header" dark fixed scroll-off-screen>
    <v-btn fab small flat depressed v-on:click.native="toggleDrawer">
      <v-icon>menu</v-icon>
    </v-btn>
    <v-toolbar-title>
      <router-link class="pointer" to="/home" tag="span">Stories</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="categories" v-if="width > 600">
      <router-link tag="span" to="stories" class="pointer category">Histoires</router-link>
      <router-link tag="span" to="chronicles" class="pointer category">Chroniques</router-link>
      <router-link tag="span" to="blog" class="pointer category">Blog</router-link>
      <router-link tag="span" to="mag" class="pointer category">ExoMag</router-link>
    </div>
    <v-toolbar-items>
        <v-btn to="login" small depressed flat color="primary"><v-icon>account_box</v-icon>LOGIN</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapMutations } from 'vuex'
import { mutationTypes } from '../../store/root/types'

const { TOGGLE_DRAWER } = mutationTypes

export default {
  data () {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  mounted () {
    // deplace
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.width = window.innerWidth
        this.height = window.innerHeight
      })
    })
  },
  methods: {
    ...mapMutations([TOGGLE_DRAWER]),

    toggleDrawer () {
      this[TOGGLE_DRAWER]()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../stylus/main.styl'

.categories
  @extend .flex-x-around
  width 45vw

.categories > span
  font-size 11px

.header-actions
  @extend .flex-x-between

</style>
