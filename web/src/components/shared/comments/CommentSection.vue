<template>
  <v-layout>
    <v-container fluid id="comment_section">
      <v-layout column>
        <v-flex>
          <h3>Votre commentaire :</h3>
        </v-flex>
        <v-flex>
          <v-layout>
            <v-flex xs7>
              <v-textarea v-model="comment.text" class="comment_textfield"></v-textarea>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex>        
          <v-btn @click="postComment()">Poster</v-btn>
          <!--Votre commentaire a bien été posté -->        
        </v-flex>
        <v-flex class="mt-5">
          <v-layout column>
            <v-flex xs12>
              <h3>Commentaires</h3>
            </v-flex>
            <v-flex xs12>
              <comment-card v-for="(comment, i) in comments" :key="i"></comment-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import CommentCard from './CommentCard'
import { mapState, mapActions } from 'vuex'
import { actionTypes } from '../../../store/modules/comment/types.js'
import { createCommentModel } from '../../../factories' 

let { ADD_COMMENT } = actionTypes

export default {
  props: {
    comments: Array,
    sourceID: String
  },
  data () {
    return {
      comment: createCommentModel()
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('comment', {
      addComment: ADD_COMMENT
    }),
    
    postComment () {
      let comment = this.comment
      comment.source = this.sourceID
      comment.author = this.user.id !== 0 ? this.user.id : undefined
      this.addComment(comment)
        .then(() => {
          //todo: popup
          comment.text = ''
        })
    }
  },
  components: {
    CommentCard
  }
}
</script>

<style lang="stylus" scoped>
</style>
