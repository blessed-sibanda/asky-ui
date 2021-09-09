import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { truncate } from './lib/filters';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

Vue.filter('truncate', truncate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
