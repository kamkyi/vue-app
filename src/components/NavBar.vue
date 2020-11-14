<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Vue</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item active">
            <router-link active-class="active" :to="{name:'Home'}" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" v-if="authenticated">
             <a class="nav-item nav-link" v-on:click.prevent="logout">Logout</a>
        </li>
        <li class="nav-item" v-else>
            <router-link active-class="active" :to="{name:'Login'}" class="nav-link">Login</router-link>
        </li>
        </ul>
    </div>
    </nav>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'

export default {
    name:'NavBar',
    computed:{
        ...mapGetters({
            authenticated:'auth/authenticated'
        })
    },
    methods:{
        ...mapActions({
            logoutNow:'auth/signOut'
        }),
        logout(){
            this.logoutNow().then(()=>{
                this.$router.replace({
                    path:'/login',
                    name:'Login'
                })
            })
        }
    }
}
</script>