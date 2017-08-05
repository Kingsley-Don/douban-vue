// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import lodash from 'lodash'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'

Vue.use(MuseUI)
Vue.use(VueAwesomeSwiper)

Object.defineProperty(Vue.prototype, '$axios', { value: axios })
Object.defineProperty(Vue.prototype, '$_', { value: lodash })

axios.defaults.params = { apikey: '0df993c66c0c636e29ecbb5344252a4a' }

Vue.filter('formatNumber', n => {
  let str = n.toString()
  if (str.length < 4) {
    return str
  } else if (str.length < 7) {
    return str.slice(0, str.length - 3) + 'K'
  } else if (str.length < 10) {
    return str.slice(0, str.length - 6) + 'M'
  } else if (str.length < 13) {
    return str.slice(0, str.length - 9) + 'B'
  }
})

Vue.filter('rating', n => {
  if (typeof n === 'number' && n > 0) {
    return n.toFixed(1)
  } else {
    return '暂无评分'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
