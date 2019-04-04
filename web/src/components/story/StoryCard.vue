<template>
  <v-card raised>
    <v-card-title primary-title>
      <div>
        <h3>{{story.title}}</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-flex>{{story.author.authorName}}</v-flex>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    story: Object,
    
  },
  data () {
    return {
    }
  },
  mounted () {
    // TODO fix mouseover infinite loop
  }
}
</script>

<style lang="stylus" scoped>

</style>
