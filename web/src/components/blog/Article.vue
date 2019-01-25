<template>
  <div id="article_details">
    <v-flex>
      <v-layout row>
        <h1 class="title_article">{{article.title}}</h1>
        <h2 class="subtitle_article">{{article.description}}</h2>
      </v-layout>
    </v-flex>
    <v-container fluid>
      <v-layout>
        <v-flex xs12 sm12 md12 lg12>
          <v-layout>
            <v-flex v-if="!isSmallScreen()" md3 lg3>
              <sharing-section sticky></sharing-section>
            </v-flex>
            <v-flex xs12 sm12 md6 lg6>
              <v-layout column class="article_body">
                <v-flex xs12>
                  <paragraph v-for="(par, i) in article.paragraphs" :key="i" 
                  :paragraph="par"></paragraph>
                </v-flex>
              </v-layout>
            </v-flex>          
          </v-layout>
        </v-flex>
        <v-flex xs12 sm12 md12 lg12>
          <v-layout column>
            <comment-section :post="article"></comment-section>
          </v-layout>
        </v-flex>  
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Paragraph from '../shared/Paragraph'
import SharingSection from '../shared/sharings/SharingSection'
import CommentSection from '../shared/comments/CommentSection'
import { createNamespacedHelpers } from 'vuex'
import { actionTypes } from '../../store/modules/blog/types.js'


const { mapState, mapActions } = createNamespacedHelpers('blog')
const { FETCH_ARTICLE_DETAILS } = actionTypes

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      article: state => state.articleDetails
    })
  },
  mounted () {
    this.fetchDetails()
      .then(status => {
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
    Paragraph,
    SharingSection,
    CommentSection
  }
}
</script>

<style lang="stylus">

</style>
