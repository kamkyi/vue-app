<template>
 <div>
    <div class="jumbotron">
   </div>
   <div class="container">
      <div class="col-md-4"></div>
      <div class="col-md-4">
          <Login/>
      </div>
      <div class="col-md-4"></div>
   </div>
  </div>
</template>

<script>
import Login from './views/supplier/Login'

export default {
  name: 'App',

  components: {
    Login
  },

  data: () => ({
    //
  }),
};
</script>
