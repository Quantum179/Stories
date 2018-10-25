<template>
  <div id="login">
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
        v-model="user.email"
        :rules="emailRules"
        label="E-mail"
        required
        ></v-text-field>
        <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
        ></v-select>
        <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
        ></v-checkbox>

        <v-btn
        :disabled="!valid"
        @click="submit"
        >
        submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
</style>
