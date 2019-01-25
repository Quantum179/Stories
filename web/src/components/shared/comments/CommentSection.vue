<template>
  <v-layout>
    <v-container fluid id="comment_section">
      <v-layout column>
        <v-flex>
          <span>Souhaitez vous laissez un commentaire ?</span>
        </v-flex>
        <v-flex xs12>
          <v-textarea
            hint="Votre commentaire"
          ></v-textarea>
        </v-flex>
        <v-flex xs12>        
          <v-btn @click="postComment">Poster</v-btn>
        </v-flex>
        <v-flex>
          <v-layout column>
            <h3>Liste des commentaires</h3>
            <comment-card v-for="(comment, i) in comments" :key="i"></comment-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import CommentCard from './CommentCard'
import { mapActions } from 'vuex'
import { actionTypes } from '../../../store/modules/comments/types.js'
/* import { createCommentModel } from '../../../factories' */

let { ADD_COMMENT } = actionTypes

export default {
  props: {
    comments: Array
  },
  data () {
    return {
      
    }
  },
  methods: {
    ...mapActions('comment', {
      addComment: ADD_COMMENT
    }),
    postComment () {
/*       this.addComment(this.newComment)
        .then(() => {
          console.log(this.newComment)
        }) */
    }
  },
  components: {
    CommentCard
  }
}
</script>

<style lang="stylus" scoped>

</style>
