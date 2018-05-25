import App from "./components/app.vue"
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"
import store from "./store"
import "./components/components"

import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi);

import vueAxios from "vue-axios"
import axios from "axios"
Vue.use(vueAxios, axios)

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next()
  } else {
    if (sessionStorage.getItem("username")) {
      next()
    } else {
      next("/login")
    }
  }
})

new Vue({
  el: "#root",
  router,
  store,
  template: "<app />",
  components: {
    App
  }
})