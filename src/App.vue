<template>
 <div>
    <div class="jumbotron">
   </div>
   <template v-if="authenticated">
      <center>
         {{ user.success.name }}<br/>
         <br/>
          <br/>
          <button class="btn btn-success mb-3" @click="$refs.imageOne.click()"> Add File + </button>
          <br/>
         <input type="file" @change="fileChange" hidden ref="imageOne">
         <input class="btn btn-primary mb-3" type="submit" @click="uploadFile" value="upload File">
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
import axios from 'axios';
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
    fileChange(event){
          this.file = event.target.files[0];
    },
    uploadFile(){
        let fd = new FormData();
        fd.append(this.file, this.file.name);
        axios.post('api/uploadFile',this.file,{
          onUploadProgress: uploadEvent => {
             console.log(' Uploaded '+ Math.round(uploadEvent.loaded / uploadEvent.total)* 100 + "%")
          }
        }).then(res => {
            console.log(res);
        });
    },  
    test(){
    this.logout();
    }
  },
  components: {
    Login
  },

  data: () => ({
    file: null
  }),
};
</script>
