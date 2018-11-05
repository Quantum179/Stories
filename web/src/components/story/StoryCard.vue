<template>
  <v-card :mouseover="hover = !hover" raised>
    <div v-if="hover" class="hover-panel">
      <span>VOIR LA PREFACE</span>
    </div>
    <v-card-title primary-title>
      <div>
        <h3>{{story.title}}</h3>
      </div>
    </v-card-title>
    <v-card-text>{{story.description}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    story: Object
  },
  data () {
    return {
      hover: false
    }
  }
}
</script>

<style lang="stylus" scoped>

.hover-panel
  width 100%
  height 100%
</style>
