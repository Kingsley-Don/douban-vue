import Vue from 'vue'
import Router from 'vue-router'


import Hello from '@/views/Hello'
import InTheaters from '@/views/InTheaters'
import Bar from '@/components/Bar'
import Navi from '@/components/Navi'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie/in-theaters',
      name: 'InTheaters',
      components: {
        default: InTheaters,
        bar: Bar,
        navi: Navi,
      },
    },
    {
      path: '/test/:id',
      name: 'movie',
      component: Hello,
    },
  ],
});
