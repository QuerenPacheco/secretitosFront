<!-- eslint-disable vue/valid-component-name -->
<template>
    <div>
      <h2>Login</h2>
    </div>
    <div>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <br>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <br>
        <button type="submit">Iniciar sesión
        </button>
      </form>
      <br>
      <br>
      <br>
      <br>
      <form @submit.prevent="register">
        <div>
          <label for="rEmail">Email:</label>
          <input type="rEmail" id="rEmail" v-model="rEmail" required>
        </div>
        <br>
        <div>
          <label for="rPassword">Contraseña:</label>
          <input type="password" id="rPassword" v-model="rPassword" required>
        </div>
        <br>
        <button type="submit">Registro de nuevo usuario
        </button>
      </form>
    </div>
  </template>
  
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        const credentials = {
        email: this.email,
        password: this.password,
      };

      axios.post('http://localhost:8000/api/login', credentials)
        .then(response => {
          // Manejar la respuesta exitosa, por ejemplo, guardar el token en el almacenamiento local
          console.log(response.data);
        })
        .catch(error => {
          // Manejar errores, por ejemplo, mostrar un mensaje de error
          console.error(error.response.data);
        });
      },

      register() {
        const data = {
        email: this.rEmail,
        password: this.rPassword,
      };

      axios.post('http://localhost:8000/api/register', data)
        .then(response => {
          // Manejar la respuesta exitosa, por ejemplo, guardar el token en el almacenamiento local
          console.log(response?.data);
        })
        .catch(error => {
          // Manejar errores, por ejemplo, mostrar un mensaje de error
          console.error(error?.response?.data);
        });
      },
    },
  };
</script>
  
  <style scoped>
  /* Estilos específicos del componente si es necesario */
  </style>
  