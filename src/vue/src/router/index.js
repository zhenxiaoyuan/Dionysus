import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import About from '@/pages/About';
import Index from '@/pages/Index';
import Detail from '@/pages/Detail';
import Terminal from '@/pages/Terminal';
import Edit from '@/pages/Edit';

Vue.use(Router);

export default new Router({
  routes: [{
    // path: '/',
    // component: App,
    // children: [{
    //     path: '',
    //     redirect: '/home'
    //   },
    //   {
        path: '/',
        component: Index,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
      },
      {
        path: '/edit/:id?',
        name: 'Edit',
        component: Edit,
      },
      {
        path: '/terminal',
        // path: '/terminal/:id',
        name: 'Terminal',
        component: Terminal,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
          keepAlive: true
        }
      }
    ]
//   }]
});
