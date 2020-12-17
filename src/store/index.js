import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // userTokenState  包括 token, reflesh_token
    userTokenState: {}
  },
  mutations: {
    setUserTokenState (state, userTokenState) {
      state.userTokenState = userTokenState
    }
  },
  actions: {
  },
  modules: {
  }
})
