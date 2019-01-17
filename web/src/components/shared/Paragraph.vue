<template>
  <p class="paragraph">
    <span>{{ paragraph.text }}</span>
  </p>
</template>

 <script>
 export default {
   props: {
     paragraph: Object
   },
   data () {
     return {

     }
   },
   mounted () {
     // todo : bind definitions with links and use computed function to render sentences
   }
 }
 </script>
 
 <style lang="stylus" scoped>
 
</style>
 