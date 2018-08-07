<template>
  <v-toolbar app id="header" dark fixed scroll-off-screen>
      <v-toolbar-title>
        <router-link to="/home" tag="h2" class="pointer">Stories</router-link>
      </v-toolbar-title>
      <v-btn flat to="stories">Histoires</v-btn>
      <v-btn flat to="chronicles">Chroniques</v-btn>
      <v-btn flat to="blog">Blog</v-btn>
      <v-btn flat to="mag">Magazine</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items >
          <v-btn to="login" color="primary" class="login-btn my-2 py-4">LOGIN</v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>

.login-btn
  height 70%
  border-radius 10px

</style>
