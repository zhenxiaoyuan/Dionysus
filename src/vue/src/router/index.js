import Vue from 'vue';
import Router from 'vue-router';
import About from '@/pages/About';
import Index from '@/pages/Index';
import Detail from '@/pages/Detail';
import Terminal from '@/pages/Terminal/Index';
import Edit from '@/pages/Terminal/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/terminal',
      // path: '/terminal/:id',
      name: 'Terminal',
      component: Terminal
    },
    {
      path: '/terminal/edit/:id?',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});
