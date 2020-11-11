import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ValidationProvider } from 'vee-validate';


require('@/store/subscription');

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false
// axios.defaults.baseURL = 'https://admin.test/'
axios.defaults.baseURL = 'https://anyar-online.herokuapp.com/'

store.dispatch('auth/attempt',localStorage.getItem('token')).then(()=>{

  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')  
});

