import Vue from 'vue'
import Vuex from 'vuex'
import * as storageTools from '@/Utils/localstorage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // userTokenState  包括 token, reflesh_token
    userTokenState: storageTools.getItem('userTokenState')
  },
  mutations: {
    setUserTokenState (state, userTokenState) {
      state.userTokenState = userTokenState
      storageTools.setItem('userTokenState', userTokenState)
    }
  },
  actions: {
  },
  modules: {
  }
})
