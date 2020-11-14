<template>
    <div>
       <router-view/>
    </div>
</template>

<script>
import axios from 'axios';
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
  },

  data: () => ({
    file: null
  }),
};
</script>
