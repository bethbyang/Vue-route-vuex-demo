import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    count:0
  },
  mutations: {
    addList(state,obj){
      state.list.push(obj);
    },
    addCount(state,n){
      state.count+=n;
    }
  },
  actions: {

  }
})
