import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
window.CESIUM_BASE_URL = '/cesium/'
// window.CESIUM_BASE_URL = '/'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
