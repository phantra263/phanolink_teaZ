import Vue from 'vue'
import Vuex from 'vuex'

// MODULE
import homepage from './modules/home-page.store'

const modules = {
  homepage
}
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      loading: false,
      countRequest: 0
    }
  },
  mutations: {
    SET_LOADING (state, payload) {
      if (payload) {
        state.countRequest++
        state.loading = true
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        state.countRequest--
        if (state.countRequest === 0) {
          state.loading = false
          document.querySelector('body').style.overflow = 'auto'
          window.scrollTo(0,0);
        }
      }
    }
  },
  modules,
  strict: debug
})
