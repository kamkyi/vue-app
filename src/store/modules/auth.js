import axios from 'axios'

export default {
  namespaced:true,
  state: {
      token: null,
      user: null
  },
  getters:{
    authenticated(state){
        return state.token && state.user;
    },
    user(state){
        return state.user;
    }
  },
  mutations: {
      SET_TOKEN(state,token){
         state.token = token;
      },
      SET_USER(state,user){
          state.user = user;
      }
  },
  actions: {
      signOut({commit}){
           try{
                axios.post('api/logout');
                commit('SET_USER',null);
                commit('SET_TOKEN',null);
           }catch(e){
                window.alert("Failed to Logut");
           }
      },
      async signIn({dispatch},credentials){
           let response = await axios.post('api/login',credentials);
           return dispatch('attempt',response.data.success.token);

      },

      async attempt({commit,state},token){    
            if(token){
                commit('SET_TOKEN',token);
            }
            if(!state.token){
                return 
            }
            try{
                
                let response  = await axios.get('api/user_info');

                commit('SET_USER',response.data);

            }catch(e){
                commit('SET_TOKEN',null);
                commit('SET_USER',null);
            }
      }
  }
}
