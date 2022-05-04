import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueEasyLightbox from 'vue-easy-lightbox'

Vue.config.productionTip = false

Vue.use(require('vue-moment'))
Vue.use(VueEasyLightbox)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
