<template>
  <v-container>
    <h3>Partager la publication sur :</h3>
    <v-layout row>
      <v-flex v-for="(icon, key) in icons" :key="key"
      @click="sharePost(icon)"
      class="sharing-icon pointer">
        <img :src="icon.img">
      </v-flex>      
    </v-layout>
  </v-container>
</template>

<script>
import FacebookIcon from '../../../../public/facebook.png'
import TwitterIcon from '../../../../public/twitter.png'
import { createPostModel } from '../../../factories'

export default {
  props: {
    post: {
      type: Object,
      default: createPostModel()
    },
    routeName: String,
    sticky: Boolean,
    inline: Boolean,
  },
  data () {
    return {
      icons: [
        {
          img: FacebookIcon,
          label: 'facebook',
          src: 'https://www.facebook.com/sharer.php?p[url]='
          // TODO : add more informations in facebook sharing (http://paulmolluzzo.github.io/simple_share_popups/)
        },
        {
          img: TwitterIcon,
          label: 'twitter',
          src: 'http://twitter.com/intent/tweet?text='
        }
      ]
    }
  },
  methods: {
    sharePost (icon) {
      //TODO : add og-tags
      window.open(this.formatHref(icon), icon.label , 
      `left=20,top=20,width=600,height=${icon.label === "twitter" ? 300 : 700},toolbar=0,resizable=1`)
    },
    formatHref (icon) {
      return icon.label === 'facebook' ? 
            `${icon.src}${this.formatUrl(this.routeName, this.post.id)}` 
            : icon.label === 'twitter' ? 
            `${icon.src}${this.post.title} : ${this.formatUrl(this.routeName, this.post.id)}` 
            : ''
    }
  }
}
</script>

<style lang="stylus" scoped>

.layout
  margin-top 10px
  width 100px

img
  width 32px
  height 32px
  border-radius 4px 
</style>
