import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Plugins
import './plugins/elementUI'
import './plugins/fontAwesomeIcon'
import './plugins/slick'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
