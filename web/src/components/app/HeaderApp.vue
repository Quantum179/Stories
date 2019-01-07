<template>
  <v-toolbar app id="header" dark fixed scroll-off-screen>
    <v-btn fab small flat depressed v-on:click.native="toggleDrawer">
      <v-icon>menu</v-icon>
    </v-btn>
    <v-toolbar-title>
      <router-link class="pointer no-select" to="/home" tag="span">Stories (alpha)</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="categories" v-if="width > 600 && 
      !isSearching">
      <span v-for="(category, i) in categories" :key="i" 
      class="pointer no-select" 
      @click="updateRoute(category.src)">{{category.title}}</span>
    </div>
    <v-toolbar-items>
        <v-layout row justify-end>
          <v-flex><v-btn fab small flat><v-icon>search</v-icon></v-btn></v-flex>
          <v-flex>      
            <v-btn v-if="!token" small depressed flat color="primary" @click="updateRoute('login')"><v-icon>account_box</v-icon>LOGIN</v-btn>
            <v-btn v-else small depressed flat color="secondary" @click="logout"><v-icon>account_box</v-icon>LOGOUT</v-btn>
          </v-flex>
        </v-layout> 
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { actionTypes } from '../../store/modules/auth/types'
import * as rootTypes from '../../store/root/types'

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
    // todo: breakpoints for differents displays
  },
  computed: {
    ...mapState({
      categories: state => state.navCategories,
      isSearching: state => state.isSearching
    }),
    ...mapState('auth', ['token'])
  },
  methods: {
    ...mapActions('auth', [REQUEST_LOGOUT]),
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
