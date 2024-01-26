import { createApp } from 'vue'
import { createRouter,createWebHistory} from 'vue-router'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Login from './views/Login';
import Register from './views/Register';

const routes = [
    {
        path: '/', 
        redirect: '/login'
    },
    { 
        path: '/login', 
        component: Login,
        props: {
            title: 'Login',
            formUri: '/login'
        },
    },
    { 
        path: '/register', 
        component: Register,
        props: {
            title: 'Registro',
            passwordConfirm: true,
            formUri: '/register'
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');
