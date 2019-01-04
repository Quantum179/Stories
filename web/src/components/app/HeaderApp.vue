<template>
  <v-toolbar app id="header" dark fixed scroll-off-screen>
    <v-btn fab small flat depressed v-on:click.native="toggleDrawer">
      <v-icon>menu</v-icon>
    </v-btn>
    <v-toolbar-title>
      <router-link class="pointer" to="/home" tag="span">Stories (alpha)</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="categories" v-if="width > 600">
      <router-link tag="span" to="stories" class="pointer ">Histoires</router-link>
      <router-link tag="span" to="chronicles" class="pointer">Chroniques</router-link>
      <router-link tag="span" to="blog" class="pointer">Blog</router-link>
      <router-link tag="span" to="mag" class="pointer">ExoMag</router-link>
    </div>
    <v-toolbar-items>
        <v-btn v-if="!token" to="login" small depressed flat color="primary"><v-icon>account_box</v-icon>LOGIN</v-btn>
        <v-btn v-else small depressed flat color="secondary" @click="logout"><v-icon>account_box</v-icon>LOGOUT</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapMutations, createNamespacedHelpers } from 'vuex'
import { actionTypes } from '../../store/modules/auth/types'
import * as rootTypes from '../../store/root/types'

const { mapState, mapActions } = createNamespacedHelpers('auth')
const { REQUEST_LOGOUT } = actionTypes
const { TOGGLE_DRAWER } = rootTypes.mutationTypes

export default {
  data () {
    return {
      width: null,
      height: null
    }
  },
  mounted () {
    this.setSize()
    // todo: find if mapstate if not better to get drawer value
  },
  computed: {
    ...mapState(['token'])
  },
  methods: {
    ...mapActions([REQUEST_LOGOUT]),
    ...mapMutations([TOGGLE_DRAWER]),

    setSize () {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.width = window.innerWidth
          this.height = window.innerHeight
        })
      })
    },
    toggleDrawer () {
      this[TOGGLE_DRAWER]()
    },
    logout () {
      this[REQUEST_LOGOUT]()
        .then(() => {
          this.updateRoute('login')
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../stylus/main.styl'

.categories
  @extend .flex-x-around
  width 45vw

.header-actions
  @extend .flex-x-between

</style>
