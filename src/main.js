import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import lodash from 'lodash'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-dark.css'
import 'animate.css/animate.min.css'

Vue.use(MuseUI)

router.beforeEach((to, from, next) => {
  next()
  this.isBack = false
})

// Object.defineProperty(Vue.prototype, '$_', { value: lodash })

// Vue.filter('formatNumber', n => {
//   let str = n.toString()
//   if (str.length < 4) {
//     return str
//   } else if (str.length < 7) {
//     return str.slice(0, str.length - 3) + 'K'
//   } else if (str.length < 10) {
//     return str.slice(0, str.length - 6) + 'M'
//   } else if (str.length < 13) {
//     return str.slice(0, str.length - 9) + 'B'
//   }
// })

Vue.filter('rating', n => {
  if (typeof(n) === 'number' && n > 0) {
    return n.toFixed(1)
  }
  return '暂无评分'
})

Vue.filter('arr2string', arr => {
  if (Array.isArray(arr)) {
    return arr.join(' / ')
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
