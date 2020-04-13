import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Styles framework
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/modal'
import AOS from "aos";

Vue.config.productionTip = true;
AOS.init();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");