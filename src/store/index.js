import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenWidth: 0,
    screenHeight: 0
  },
  getters: {
    getScreenWidth (state) {
      return state.screenWidth
    },
    getScreenHeight (state) {
      return state.screenHeight
    }
  },
  mutations: {
    UPP_SCREEN_WIDTH (state, width) {
      state.screenWidth = width
    },
    UPP_SCREEN_HEIGHT (state, height) {
      state.screenHeight = height
    }
  },
  actions: {
    updateScreenWidth (context, width) {
      context.commit('UPP_SCREEN_WIDTH', width)
    },
    updateScreenHeight (context, height) {
      context.commit('UPP_SCREEN_HEIGHT', height)
    }
  },
  modules: {
  }
})
