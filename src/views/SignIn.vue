<template>
    <form @submit.prevent="submit">
         <label> Email: </label>
         <input type="text" v-model="form.email"><br/>
         <label> Password</label>
         <input type="password" v-model="form.password"><br/>
         <input type="submit" value="Login">
    </form>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'SignIn',
  methods:{
    ...mapActions({
      signIn:'auth/signIn'
    }),
    async submit(){
        this.signIn(this.form).then(() => {
          this.$router.replace({
            name:'Dashboard'
          });
        })
    }
  },
  data(){
    return {
      form:{
        email:'',
        password:''
      }
    };
  }
}
</script>
