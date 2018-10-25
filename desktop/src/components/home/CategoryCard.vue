<template>
  <div class="category-card">
    <v-btn flat to="category.name">{{category.name}}</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    category: Object
  }
}
</script>

<style lang="stylus" scoped>

</style>
