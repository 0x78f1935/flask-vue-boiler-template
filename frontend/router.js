import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './views/homepage.vue';
import TestPage from './views/test_page.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        MPA: true
      },
      component: HomePage
    },
    {
      path: '/test',
      name: 'test',
      meta:{
        MPA: true
      },
      component: TestPage
    }
  ],
})