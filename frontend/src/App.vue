<template>
  <div id="app">
    <sidebar :class="{ hidedesktop: $route.meta.hideDesktop }"></sidebar>
    <div class="navigation">
      <navbar></navbar>
    </div>
    <vue-page-transition name="fade-in-down">
      <router-view />
    </vue-page-transition>
    <footerbar></footerbar>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'nprogress/nprogress.css';
  import 'aos/dist/aos.css';
  import '@mdi/font/css/materialdesignicons.min.css'
  import './assets/css/main.min.css';
export default {
  name: "Home",
  components: {
    navbar: () => import("./components/navbar.vue"),
    sidebar: () => import("./components/sidebar.vue"),
    footerbar: () => import("./components/footerbar.vue"),
  }
};
</script>
