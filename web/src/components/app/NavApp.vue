<template>
  <v-navigation-drawer app v-model="drawer" absolute
  @click="test()">
    <v-list class="pa-1">
      <v-list-tile-content>
        <h2 to="home">Stories</h2>
      </v-list-tile-content>
    </v-list>
    <v-list class="pt-0" dense>
      <v-divider light></v-divider>
      <v-list-tile v-for="item in navCategories" :key="item.title" class="pointer"
      @click="handleClick(item.src)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider light></v-divider>
      <v-list-tile v-for="item in navOptions" :key="item.title" class="pointer"
       @click="handleClick(item.src)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title @click="handleClick(item.src)">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { getterTypes, mutationTypes } from '../../store/root/types'

const { GET_DRAWER_VALUE } = getterTypes
const { SHOW_DRAWER, CLOSE_DRAWER } = mutationTypes

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['navCategories', 'navOptions']),
    ...mapGetters({
      getDrawerValue: GET_DRAWER_VALUE
    }),

    drawer: {
      get () {
        return this.getDrawerValue
      },
      set () {

      }
    }
  },
  methods: {
    ...mapMutations({
      showDrawer: SHOW_DRAWER,
      closeDrawer: CLOSE_DRAWER
    }),
    test () {
      debugger
    },
    handleClick(src) {
      this.closeDrawer()
      this.updateRoute(src)
    }
  }
}
</script>

<style lang="stylus">

</style>
