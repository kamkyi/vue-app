<template>
 <div>
    <div class="jumbotron">
   </div>
   <template v-if="authenticated">
      <center>
         {{ user.success.name }}
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
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
       authenticated:'auth/authenticated',
       user:'auth/user'
    })
  },
  components: {
    Login
  },

  data: () => ({
    //
  }),
};
</script>
