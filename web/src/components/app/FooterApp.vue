<template>
  <v-footer height="15" id="footer" class="pa-2" dark>
    <div class="footer-title">&copy; {{ new Date().getFullYear() }} ExoSoft</div>
  </v-footer>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
#footer
  display flex
  justify-content center

.footer-title
  font-size 8px
</style>
