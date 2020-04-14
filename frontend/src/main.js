import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Styles framework
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons/";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/"

import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/modal'
import AOS from "aos";

AOS.init();
library.add(faFacebookF, faInstagram, faYoutube, faTwitter, faArrowDown);
dom.watch();
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");