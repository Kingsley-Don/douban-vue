import Vue          from 'vue'
import Router       from 'vue-router'

import MovieHome    from '@/views/MovieHome'
import MovieList    from '@/views/MovieList'
import MovieDetail  from '@/views/MovieDetail'
import Bar          from '@/components/Bar'
import ErrorPage        from '@/views/Error'
// import Navi from '@/components/Navi'

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
      name: 'movie-home',
      components: {
        default: MovieHome,
        bar: Bar,
      }
    },
    {
      path: '/movie/in-theaters',
      name: 'in-theaters',
      components: {
        default: MovieList,
        bar: Bar,
      }
    },
    {
      path: '/movie/:id',
      name: 'movie-detail',
      components: {
        default: MovieDetail,
        bar: Bar,
      }
    },
    {
      path: '/error',
      name: 'error',
      components: {
        default: ErrorPage,
        bar: Bar,
      }
    },
    {
      path: '*',
      redirect: '/error'
    },
  ],
})
