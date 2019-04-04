<template>
  <post id="chronicle_details" 
  v-if="isFetched" 
  :post="chronicle"
  :name="'chronicles'"></post>
</template>

<script>
import Post from '../shared/Post'
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '../../store/modules/chronicle/types'
import { authGuard } from '../../services/auth'

const { FETCH_CHRONICLE_DETAILS } = actionTypes

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
    ...mapState('chronicle', {
      chronicle: state => state.chronicleDetails
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
    ...mapActions('chronicle', {
      fetchDetails: FETCH_CHRONICLE_DETAILS
    })
  },
  components: {
    Post
  }
}
</script>

<style lang="stylus">

</style>
