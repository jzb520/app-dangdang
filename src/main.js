import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'

Vue.config.productionTip = false

Vue.use(utils);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
