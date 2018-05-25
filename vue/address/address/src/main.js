import App from "./components/app.vue"
import Vue from "vue"
import router from "./router"
import axios from 'axios'
Vue.prototype.axios=axios

import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi);
new Vue({
  el: "#root",
  router,
  template: "<app />",
  components: {
    App
  }
})