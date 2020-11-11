import axios from "axios";

export default{
    namespaced:true,
    state:{
        
    },
    getters:{
        
    },
    mutations:{

    },
    actions:{
        login({dispatch},credentials){
            dispatch('attempt',credentials);
        },
        async attempt(credentials){
               let response = await axios.post('api/login',credentials);
               console.log(response);
        }   
    }
}