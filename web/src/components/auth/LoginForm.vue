<template>
  <div id="login">
    <v-layout column align-center>
      <v-flex column xs12 sm12 md12 lg12>
        <h2>Connexion</h2>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12>
        <v-card id="login_card">
          <span class="text-error" v-if="this.redirect">Vous devez être connecté pour avoir accès à cette page.</span>

          <v-form id="login-form" ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-layout column align-item>
                <v-text-field
                v-model="form.email"
                :rules="emailRules"
                label="Email"
                required
                ></v-text-field>
                <v-text-field
                  v-model="form.password"
                  :rules="passwordRules"
                  label="Mot de passe"
                  type="password"
                  required
                ></v-text-field>
                <v-checkbox
                  v-model="form.rememberMe"
                  label="Se souvenir de moi ?"
                ></v-checkbox>
                <v-btn :disabled="!valid" color="info" @click="submit" @keyup.native.enter="submit">
                  Se connecter
                </v-btn>          
              </v-layout>
            </v-container>        
          </v-form>
        </v-card>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { actionTypes } from '../../store/modules/auth/types'
import * as rootTypes from '../../store/root/types'

const { REQUEST_LOGIN } = actionTypes
const { SHOW_SNACKBAR_ACTION } = rootTypes.actionTypes

export default {
  data () {
    return {
      form: {
        email: 'testmail@gmail.com',
        password: 'testpass',
        rememberMe: false
      },
      valid: true,
      passwordRules: [
        v => !!v || 'Le mot de passe est requis',
        v => (v && v.length >= 6) || '6 caractères min.'
      ],
      emailRules: [
        v => !!v || 'L\'email est requis',
        v => /.+@.+/.test(v) || 'L\'email doit être valide'
      ],
      redirect: false
    }
  },
  computed: {
  },
  mounted () {
    window.addEventListener('keyup', this.onEnterKeyPress)
    if(this.$route.query.hasOwnProperty('redirect')) {
      this.redirect = true
    }
    // todo: add guard system 
    // todo: propose browser cached data (email) when enter input
    // https://serversideup.net/vue-router-navigation-guards-vuex/
    // https://serversideup.net/clean-vuejs-public-private-routes/
  },
  destroyed() {
    window.removeEventListener('keyup', this.onEnterKeyPress)
  },
  methods: {
    ...mapActions({
      showSnackbar: SHOW_SNACKBAR_ACTION
    }),
    ...mapActions('auth', {
      login: REQUEST_LOGIN
    }),

    submit () {
      if (this.$refs.form.validate()) {
        let that = this
        this.login(this.form)
          .then(user => {
            const text = `Bienvenue sur Stories, Alpha testeur !`
            that.showSnackbar(text)
            that.updateRoute(that.$route.query.redirect || '/home')
          })
          .catch(err => {
            // todo: display errors in form
            //this.
            console.log(err)
          })     
      }
    },
    onEnterKeyPress (event) {
      event.preventDefault()
      if(event.keyCode === 13) {
        this.submit()
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    beforeRouterEnter (to, from, next) {
      debugger
      next()
    }
  }
}
</script>

<style lang="stylus">
#login_card
  width 50vw

.text-error
  color red
</style>
