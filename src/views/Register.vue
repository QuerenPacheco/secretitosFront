<template>
  <UserForm title="Registro" password-confirm form-uri="/register" />
  <router-link to="/login"><v-btn variant="text" color="white">Tengo cuenta, quiero acceder</v-btn></router-link>
</template>
  
<script>
import UserForm from "../components/UserForm";

export default {
  name: 'RegisterUser',
  components: {
    UserForm
  }
}
</script>