<template>
    <ul>
        <template v-if="authenticated">
                <li>
               <router-link
                        :to="{
                           name:'Home'
                        }"
                     >
                        Home
                     </router-link>
                  </li>
                  <li>
                     <router-link
                        :to="{
                           name:'Dashboard'
                        }"
                     >
                        Dashboard
                     </router-link>
                  </li>
                  <li>
                        {{ user.name }}<br/>
                        {{ user.email }}
                  </li>
                  <li>
                        <form @submit.prevent="logout">
                           <input type="submit" value="Logout">
                        </form>
                  </li>
        </template>
        <template v-else>
                 <li>
                     <router-link
                        :to="{
                           name:'SignIn'
                        }"
                     >
                        SignIn
                     </router-link>
                  </li>
        </template>
    </ul>
</template>>
<script>
import {mapGetters,mapActions } from 'vuex';
export default {
   name:'Nav',
   computed:{
      ...mapGetters({
         authenticated:'auth/authenticated',
         user:'auth/user'
      })
   },
   methods:{
      ...mapActions({
         signOutAction:'auth/signOut'
      }),
      logout(){
         this.signOutAction().then(()=>{
             this.$router.replace({
                name:'SignIn'
             })
         });
      }
   }
}
</script>>