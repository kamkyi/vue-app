<template>
 <div>
    <div class="jumbotron">
   </div>
   <template v-if="authenticated">
      <center>
         {{ user.success.name }}<br/>
         <br/>
         <button class="btn btn-danger btn-md" v-on:click="test">Logout</button>
      </center>
   </template>
   <template v-else>
      <div class="container">
      <div class="col-md-4"></div>
      <div class="col-md-4">
          <Login/>
      </div>
      <div class="col-md-4"></div>
   </div>
   </template>
  </div>
</template>

<script>
import Login from './views/supplier/Login'
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
       authenticated:'auth/authenticated',
       user:'auth/user'
    })
  },
  methods:{
    ...mapActions({
       logout:'auth/signOut'
    }),
    test(){
    this.logout();
    }
  },
  components: {
    Login
  },

  data: () => ({
    //
  }),
};
</script>
