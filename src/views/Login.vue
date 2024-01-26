<template>
  <UserForm title="Login" form-uri="/login" />
  <router-link to="/register"><v-btn variant="plain" color="white">No tengo cuenta, quiero
      registrarme</v-btn></router-link>
</template>
  
<script>
import UserForm from "../components/UserForm";

export default {
  name: 'LoginUser',
  components: {
    UserForm
  }
}
</script>
