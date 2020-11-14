<template>
      <div>
          <div class="jumbotron">
          </div>
          <NavBar/>
          <div class="container">
            <router-view/>
          </div>
      </div>
</template>

<script>
import axios from 'axios';
import {mapGetters,mapActions} from 'vuex'
import NavBar from './components/NavBar'

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
    NavBar
  },

  data: () => ({
    file: null
  }),
};
</script>
<style scoped>
 .jumbotron{
   margin:0;
 }
</style>
