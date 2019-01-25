<template>
  <v-toolbar app id="header" dark fixed scroll-off-screen
    prominent extended dense>
    <v-btn fab small flat depressed v-on:click.native="toggleDrawer"
    v-if="isSmallScreen()">
      <v-icon>menu</v-icon>
    </v-btn>
    <v-toolbar-title>
      <router-link class="pointer no-select" to="/home" tag="span">Stories (alpha)</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="categories" v-if="!isSmallScreen() && 
      !isSearching">
      <span v-for="(category, i) in categories" :key="i" 
      class="pointer no-select" 
      @click="updateRoute(category.src)">{{category.title}}</span>
    </div>
    <v-toolbar-items>
        <v-layout row justify-end>
          <v-flex><v-btn fab flat><v-icon>search</v-icon></v-btn></v-flex>
          <v-flex>     
            <v-btn v-if="!token" depressed flat color="primary" @click="updateRoute('login')"><v-icon>account_box</v-icon>LOGIN</v-btn>
            <v-btn v-else depressed flat color="secondary" @click="_logout"><v-icon>account_box</v-icon>LOGOUT</v-btn>
          </v-flex>
        </v-layout> 
    </v-toolbar-items>
    <component v-if="extension != ''" :is="extension" slot="extension"></component>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { actionTypes } from '../../store/modules/auth/types'
import * as rootTypes from '../../store/root/types'

import HomeTabs from '../home/HomeTabs'
import StoryTabs from '../story/StoryTabs'
import TopicTabs from '../blog/TopicTabs'

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
    // todo: find if mapstate if not better to get drawer value
    // todo: breakpoints for differents displays
  },
  computed: {
    ...mapState({
      categories: state => state.navCategories,
      isSearching: state => state.isSearching,
      extension: state => state.extension
    }),
    ...mapState('auth', ['token'])
  },
  methods: {
    ...mapActions('auth', {
      logout: REQUEST_LOGOUT
    }),
    ...mapMutations({
      toggleDrawer: TOGGLE_DRAWER
    }),

    _logout () {
      this.logout()
        .then(() => {
          this.updateRoute('login')
        })
    }
  },
  components: {
    HomeTabs,
    StoryTabs,
    TopicTabs
  }
}
</script>

<style lang="stylus" scoped>
@import '../../stylus/main.styl'

.categories
  @extend .flex-x-around
  width 45vw
  font-size 130%
  bottom 0px

.header-actions
  @extend .flex-x-between

</style>
