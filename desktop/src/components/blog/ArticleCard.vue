<template>
  <div>
    <v-container>
      <exo-card v-if="!isSelected"></exo-card>
      <exo-card v-if="isSelected"></exo-card>
    </v-container>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus">

</style>
