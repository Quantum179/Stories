<template>
  <v-carousel>
    <v-carousel-item
      v-for="(slide,i) in slides"
      :key="i"
      :src="slide.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    slides: Array
  },
  data() {

  }
}
</script>

<style lang="stylus">

</style>
