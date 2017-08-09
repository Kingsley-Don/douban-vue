import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import InTheaters from '@/views/InTheaters'
import comingSoon from '@/views/comingSoon'
import Subject from '@/views/Subject'
import AppBar from '@/components/AppBar'
import ErrorPage from '@/views/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      name: 'home',
      components: {
        default: Home,
        bar: AppBar,
      }
    },
    {
      path: '/movie/in-theaters',
      name: 'inTheaters',
      components: {
        default: InTheaters,
        bar: AppBar,
      }
    },
    {
      path: '/movie/coming-soon',
      name: 'comingSoon',
      components: {
        default: comingSoon,
        bar: AppBar,
      }
    },
    {
      path: '/movie/:id',
      name: 'subject',
      components: {
        default: Subject,
        bar: AppBar,
      }
    },
    {
      path: '/error',
      name: 'error',
      components: {
        default: ErrorPage,
        bar: AppBar,
      }
    },
    {
      path: '/*',
      redirect: '/error'
    },
  ],
})
