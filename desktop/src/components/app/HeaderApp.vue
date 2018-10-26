<template>
<div>
  <v-toolbar app id="header" height="30" dark fixed scroll-off-screen>
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
  <v-navigation-drawer app
  :input="test"
  v-model="drawer"
  absolute
  >
    <v-list class="pa-1">
      <v-list-tile-content>
        <h2 to="home">Stories</h2>
      </v-list-tile-content>
    </v-list>
    <v-list class="pt-0" dense>
      <v-divider light></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.src"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider light></v-divider>
            <v-list-tile
        v-for="item in items2"
        :key="item.title"
        :to="item.src"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Histoires', icon: 'dashboard', src: 'stories' },
        { title: 'Chroniques de Saturn', icon: 'dashboard', src: 'chronicles' },
        { title: 'Blog', icon: 'dashboard', src: 'blog' },
        { title: 'ExoMag', icon: 'dashboard', src: 'mag' }
      ],
      items2: [
        { title: 'A Propos', icon: 'dashboard', src: 'aboutus' },
        { title: 'Nous Contacter', icon: 'dashboard', src: 'contact' },
        { title: 'Paramètres', icon: 'dashboard', src: 'settings' }
      ],
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  computed: {
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
    toggleDrawer () {
      this.drawer = !this.drawer
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
