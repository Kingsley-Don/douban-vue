import Vue from 'vue'
import Router from 'vue-router'

import InTheaters from '@/views/InTheaters'
import MovieInfo from '@/views/MovieInfo'
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
      name: 'in-theaters',
      components: {
        default: InTheaters,
        bar: Bar,
        navi: Navi,
      },
    },
    {
      path: '/movie/:id',
      name: 'movie-info',
      components: {
        default: MovieInfo,
        bar: Bar,
      }
    },
  ],
})
