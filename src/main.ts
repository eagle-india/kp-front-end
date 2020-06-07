import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './App.scss'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
