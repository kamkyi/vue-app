import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require('@/store/subscription');

Vue.config.productionTip = false
// axios.defaults.baseURL = 'https://admin.test/'
axios.defaults.baseURL = 'https://wai-vue.herokuapp.com/'

store.dispatch('auth/attempt',localStorage.getItem('token')).then(()=>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')  
});
