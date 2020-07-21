import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalSnackbar: {
      message: '这是一个消息提示',
      show: false
    }
  },
  mutations: {
    showSnackbar(state, message) {
      state.globalSnackbar = {
        message: message,
        show: true
      }
    }
  },
  actions: {},
  modules: {}
})
