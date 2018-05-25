

import Vue from "vue"
import router from './router'
import './css/style.css'
import mock from './mock'
//import vuex from 'vuex'
import store from './store'
import axios from 'axios'
Vue.prototype.axios=axios
new Vue({
  el:"#root",
  router,
  store,
  template:"<app />",
  components: {
      app: resolve => require(['./components/app.vue'], resolve)
  }
})
