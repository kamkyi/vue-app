const state = {
    supplier:{
        name:'',
        age:'',
        email:'',
        password:''
    },
    email:'',
    password:''
};

const actions = {
    login({commit}){
       commit('ALERT')
    }
};

const mutations = {
    ALERT(){
        window.alert();
    }
};

const getters = {};

export default{
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}
