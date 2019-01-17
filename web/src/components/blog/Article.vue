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
              <sharing-nav sticky></sharing-nav>
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
            <sharing-nav v-if="isSmallScreen" inline></sharing-nav>
            <p>Voulez-vous laisser un commentaire ?</p>
            <comment-form></comment-form>
            <h4>Commentaires</h4>
            <comment-list></comment-list>
          </v-layout>
        </v-flex>  
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Paragraph from '../shared/Paragraph'
import SharingNav from '../shared/SharingNav'
import CommentForm from '../shared/comments/CommentForm'
import CommentList from '../shared/comments/CommentList'
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
    this[FETCH_ARTICLE_DETAILS]()
      .then(status => {
        if(status === 500) {
          // todo: display internal server error message
        }
      })
  },
  components: {
    Paragraph,
    SharingNav,
    CommentForm
  }
}
</script>

<style lang="stylus">

</style>
