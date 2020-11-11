<template>
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
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>

import {mapActions} from 'vuex';
import { extend } from 'vee-validate';

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max']
});

export default {
    name:'Login',
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
            login:'auth/signIn'
        }),
        async submit(){
            this.login(this.form)
        }
    }
}
</script>
<style scoped>
.field-error {
  color: red;
}
</style>