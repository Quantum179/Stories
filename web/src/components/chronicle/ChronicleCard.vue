<template>
  <v-card raised ripple>
    <v-card-title primary-title>
      <v-flex justify-center>
        <h2>{{cardTitle}}</h2>
      </v-flex>
    </v-card-title>
    <v-flex justify-center>
      <div class="divider"></div>
    </v-flex>
    <v-card-text>
      <h4>{{chronicle.preface.text}}</h4>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    chronicle: Object
  },
  data () {
    return {
    }
  },
  computed: {
    cardTitle () {
      let abrev = this.chronicle.number === 1 ? 'ère' : 'ème'
      return `${this.chronicle.number}${abrev} Chronique : ${this.chronicle.title}`
      //TODO : gestion des langues et des ressources
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-card
  height 100%
  width 100%

.divider 
  width 90%
  height 1px
  background-color black

/* h2, h4
  color white */
</style>
