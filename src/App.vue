<template>
  <v-sheet class="bg-deep-purple pa-12">
    <h1>Secretos</h1>
    <RegisterForm/>
  </v-sheet>
</template>

<script>
import RegisterForm from "./components/RegisterForm.vue"

export default {
  name: 'App',
  components: {
    RegisterForm,
  }
}
</script>

<style>
</style>
