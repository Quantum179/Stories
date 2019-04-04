<template>
  <div>
    <v-flex>
      <v-layout column align-center>
        <h1 class="post_title">{{post.title}}</h1>
<!--         <h3 class="post_subtitle">
          Par <a @click="showAuthor(post.author.id)">{{post.author.authorName}}</a>, le {{formatDate(post.createdAt)}}
        </h3> -->
      </v-layout>
    </v-flex>
    <v-container fill-height>
      <v-layout column>
        <v-layout row wrap v-if="render === 'chapter'" >
          <v-flex v-for="(chapter, i) in post.chapters" :key="i" 
          xs12>
            <chapter :isNamed="isNamed" :chapter="chapter"></chapter>
          </v-flex>        
        </v-layout>
        <v-layout row wrap v-if="render === 'paragraph'">
          <v-flex  v-for="(paragraph, i) in post.paragraphes" :key="i"
          xs12>
            <paragraph 
            :paragraph="paragraph"></paragraph>        
          </v-flex>        
        </v-layout>
        <hr>
        <v-flex xs12>
          <sharing-section :post="post" :routeName="routeName"></sharing-section>
        </v-flex>
        <v-flex xs12>
          <comment-section :comments="post.comments" :sourceID="post.id"></comment-section>  
        </v-flex> 
      </v-layout>
    </v-container>
  </div>
</template>

<script>
/* import { mapMutations } from 'vuex' */
import Chapter from '../shared/Chapter'
import Paragraph from '../shared/Paragraph'
import SharingSection from '../shared/sharings/SharingSection'
import CommentSection from '../shared/comments/CommentSection'
/* import { SET_SELECTED_AUTHOR } from '../../store/root/types.js' */
import { createPostModel } from '../../factories'

export default {
  props: {
    post: {
      type: Object,
      default: createPostModel()
    },
    render: {
      type: String,
      default: 'chapter'
    },
    isNamed: Boolean,
    name: String
  },
  data () {
    return {
    }
  },

  computed: {
    routeName () {
      switch (this.post.type) {
        case 'Story':
          return 'stories'
          break
        case 'Chronicle':
          return 'chronicles'
          break
        case 'Article':
          return 'articles'
          break
      }
    }
/*     subtitle () {
      return `Par ${this.post.author.authorName}, le ${this.formatDate(this.post.createdAt)}`
    } */
  },
  methods: {
/*     ...mapMutations('author', {
      setSelectedAuthor: SET_SELECTED_AUTHOR
    }),
    showAuthor(id) {
      this.setSelectedAuthor(id)
      this.updateRoute('author')
    } */
  },
  components: {
    Chapter,
    Paragraph,
    SharingSection,
    CommentSection,
  }
}
</script>

<style lang="stylus">
hr 
  width 100%
</style>
