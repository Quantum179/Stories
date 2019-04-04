<template>
  <post id="story_details" 
  v-if="isFetched" 
  :post="story" isNamed></post>
</template>

<script>
import Post from '../shared/Post'
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '../../store/modules/story/types.js'
import { authGuard } from '../../services/auth.js'

const { FETCH_STORY_DETAILS } = actionTypes

export default {
  data () {
    return {
      params: {
        populate: [
          { path: 'author', select: 'authorName' }
        ]
      },
      isFetched: false
    }
  },
  computed: {
    ...mapState('story', {
      story: state => state.storyDetails
    }),
    ...mapState('auth', ['token'])
  },
  mounted () {
    if(!authGuard(this.token)) {
      this.$router.push({path: '/login', query: {redirect: this.$route.path}})
    } else {
       this.fetchDetails(this.params)
        .then(status => {
          if(status === 200) {
            this.isFetched = true
          } else {
            this.isFetched = false

          }
        })  
    }
  },
  methods: {
    ...mapActions('story', {
      fetchDetails: FETCH_STORY_DETAILS
    })
  },
  components: {
    Post
  }
}
</script>

<style lang="stylus">
</style>
