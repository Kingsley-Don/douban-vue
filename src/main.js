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
  return n > 0 ? n.toFixed(1) : '暂无评分'
})

Vue.filter('a2s', (arr, symbol = ' / ') => {
  return Array.isArray(arr) ? arr.join(symbol) : ''
})

Vue.filter('mili', num => {
  return num && num.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',')
})

Vue.filter('name', arr => {
  let name = []
  arr.forEach(a => name.push(a.name + ' ' + a.name_en))
  return name
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
