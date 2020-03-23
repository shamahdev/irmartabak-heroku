import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap
import "bootstrap";

// Utilization
import AOS from "aos";
import 'aos/dist/aos.css';

Vue.config.productionTip = true;
AOS.init();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");