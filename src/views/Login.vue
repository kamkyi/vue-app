<template>
 <div>
    <div class="row">
        <div class="col-md-4">
           <form @submit.prevent="submit">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
            <label for="password">Password</label>
            <ValidationProvider rules="minmax:3,8" v-slot="{ errors }">
                <input type="password" v-model="form.password" class="form-control" id="password" placeholder="Password">
                <span class="field-error">{{ errors[0] }}</span>
            </ValidationProvider>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">
            <span class="spinner-border spinner-border-sm" v-if="seen" role="status" aria-hidden="true"></span>
                 {{ loginText }}
            </button>
            </form>
        </div>
    </div>
 </div>
</template>
<script>

import {mapActions,mapGetters} from 'vuex';
import { extend } from 'vee-validate';

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max']
});

export default {
    name:'Login',
    computed:{
        ...mapGetters({
            seen:'auth/seen',
            loginText:'auth/login'
        })
    },
    data(){
        return {
            form:{
                email:'',
                password:''
            }
        };
    },
    methods:{
        ...mapActions({
            login:'auth/signIn',
            setSeen:'auth/setSeen',
            setLogin:'auth/setLogin'
        }),
        async submit(){
            this.setLogin(true);
            this.login(this.form).then(() => {
                this.$router.replace({
                    name:'Dashboard'
                });
                this.setSeen(false);
                this.setLogin(false);
            });
        }
    }
}
</script>
<style scoped>
.field-error {
  color: red;
}
</style>