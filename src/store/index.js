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
  modules,
  strict: debug
})
