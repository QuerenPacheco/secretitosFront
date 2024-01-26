<template>
    
    <v-card class="mx-auto px-6 py-8" max-width="344" :text="title">
      
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          type="password"
          label="Contraseña"
          placeholder="Enter your password"
        ></v-text-field>
        
        <v-text-field 
          v-if="passwordConfirm"
          v-model="confirmPassword"
          :readonly="loading"
          :rules="[required, validatePasswords]"
          type="password"
          label="Confirmar Contraseña:"
          placeholder="Enter your password"
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form || !passwordsMatch"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Enviar
        </v-btn>
      </v-form>
    </v-card>

</template>
<script>
  import axiosInstance from '@/api/axios'

  export default {
    props: {
      title: String,
      passwordConfirm: Boolean,
      formUri: String
    },

    data: () => ({
      form: false,
      email:  '',
      password:  '',
      loading: false,
      passwordsMatch: true,

    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true
        const credentials = {
          email: this.email,
          password: this.password,
        };
        axiosInstance.post(this.formUri, credentials)
        .then(response => {
          // Manejar la respuesta exitosa, por ejemplo, guardar el token en el almacenamiento local
          console.log(response?.data);
          this.loading = false
        })
        .catch(error => {
          // Manejar errores, por ejemplo, mostrar un mensaje de error
          console.error(error?.response?.data);
          this.loading = false
        });

      },

      validatePasswords() {
        return this.password === this.confirmPassword || 'Deben de coincidir las contraseñas';
      },

      required (v) {
        return !!v || 'Este campo es obligatorio'
      },
    },
  }
</script>