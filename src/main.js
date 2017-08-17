import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-dark.css'
import 'animate.css/animate.min.css'

Vue.use(MuseUI)

Vue.filter('rating', n => {
  if (typeof(n) === 'number' && n > 0) {
    return n.toFixed(1)
  }
  return '暂无评分'
})

Vue.filter('a2s', arr => {
  if (Array.isArray(arr)) {
    return arr.join('/')
  }
  return ''
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
