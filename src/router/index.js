import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import SmallList from '@/views/SmallList';
import Subject from '@/views/Subject';
import Discussion from '@/views/Discussion';
import CommentList from '@/views/CommentList';
import ReviewList from '@/views/ReviewList';
import Review from '@/views/Review';
import ErrorPage from '@/views/Error';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/movie',
    },
    {
      path: '/movie',
      name: 'home',
      component: Home,
    },
    {
      path: '/movie/in-theaters',
      name: 'inTheaters',
      component: SmallList,
    },
    {
      path: '/movie/coming-soon',
      name: 'comingSoon',
      component: SmallList,
    },
    {
      path: '/movie/:id',
      name: 'subject',
      component: Subject,
    },
    {
      path: '/movie/:id',
      component: Discussion,
      children: [
        {
          path: 'comment',
          name: 'comments',
          component: CommentList,
        },
        {
          path: 'review',
          name: 'reviews',
          component: ReviewList,
        },
      ],
    },
    {
      path: '/review/:id',
      name: 'review',
      component: Review,
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage,
    },
    {
      path: '/*',
      redirect: '/error',
    },
  ],
});
