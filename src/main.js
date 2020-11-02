import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify';

require('@/store/subscription');

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

