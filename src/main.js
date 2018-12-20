// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex";
import store from "./store/index.js"; //注意文件路径
import Axios from "axios";

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.$axios = Axios;
Axios.defaults.headers.post['Content-Type'] = 'application/json';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
