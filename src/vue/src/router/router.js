import Vue from 'vue';
import Router from 'vue-router';
// import App from '@/App';
import about from '@/pages/about/about';
import home from '@/pages/home/home';
import article from '@/pages/article/article';
import terminal from '@/pages/terminal/terminal';
import edit from '@/pages/terminal/children/edit';

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
        component: home,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/detail/:id',
        component: article,
      },
      {
        path: '/edit/:id?',
        component: edit,
      },
      {
        path: '/terminal',
        // path: '/terminal/:id',
        component: terminal,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/about',
        component: about,
        meta: {
          keepAlive: true
        }
      }
    ]
//   }]
});
