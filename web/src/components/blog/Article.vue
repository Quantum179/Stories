<template>
  <post id="article_details" 
  v-if="isFetched" 
  :post="article" 
  :render="'paragraph'"
  :name="'blog'"></post>
</template>

<script>
import Post from '../shared/Post'
import { createNamespacedHelpers } from 'vuex'
import { actionTypes } from '../../store/modules/blog/types.js'

const { mapState, mapActions } = createNamespacedHelpers('blog')
const { FETCH_ARTICLE_DETAILS } = actionTypes

export default {
  data () {
    return {
      params: {
        populate: [
          { path: 'author', select: 'authorName' },
          { path: 'topic', select: 'name'}
        ]
      },
      isFetched: false
    }
  },
  computed: {
    ...mapState({
      article: state => state.articleDetails
    })
  },
  mounted () {
    this.fetchDetails(this.params)
      .then(status => {
        if(status === 200) {
          this.isFetched = true
        }
        if(status === 500) {
          // todo: display internal server error message
        }
      })
  },
  methods: {
    ...mapActions({
      fetchDetails: FETCH_ARTICLE_DETAILS
    })
  },
  components: {
    Post
  }
}
</script>

<style lang="stylus">

</style>
