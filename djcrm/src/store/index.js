import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading:false,
    isAuthenticated:false,
    token:'',
    user:{
      id:0,
      username:''
    }

  },
  getters: {
  },
  mutations: {
    initializestore(state){
      if(localStorage.getItem('token')){
        state.token =localStorage.getItem('token')
        state.isAuthenticated =true
        state.user.username =localStorage.getItem('username')
        state.user.id =localStorage.getItem('userid')
      } else{
        state.token =''
        state.isAuthenticated =false
        state.user.id=0
        state.user.username=''
      }

    },
    setIsLoading(state,status){
      state.isLoading= status

    },

    setToken(state,token){
      state.token =token
      state.isAuthenticated =true


    },
    removeToken(state){
      state.token=''
      state.isAuthenticated=false
    },
    setUser(state,user){
      state.user=user
    },
  },
  actions: {
  },
  modules: {
  }
})
