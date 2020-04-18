import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Styles framework
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faInstagram, faYoutube, faTwitter, faWhatsapp, faLinkedin, faBehance, faGithub} from "@fortawesome/free-brands-svg-icons/";
import { faArrowDown, faArrowUp, faArrowLeft, faArrowRight, faEnvelope, faTimes, faBars, faPlus} from "@fortawesome/free-solid-svg-icons/"

import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/modal'
import AOS from "aos/dist/aos.esm";

AOS.init();
library.add(faFacebookF, faInstagram, faYoutube, faTwitter, faWhatsapp, faLinkedin, faBehance, faGithub, faArrowDown, faArrowUp, faArrowRight, faArrowLeft, faEnvelope, faTimes, faBars, faPlus);
dom.watch();
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");