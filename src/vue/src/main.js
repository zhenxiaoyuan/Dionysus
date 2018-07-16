// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import '@/assets/js/element';     // 引入 Element 组件库相关组件
import "@/assets/js/axios";       // 引入 axios
import '@/assets/css/normalize.css';   // 引入 normalize.css

Vue.config.productionTip = false; // 关闭生产模式下给出的提示

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});


