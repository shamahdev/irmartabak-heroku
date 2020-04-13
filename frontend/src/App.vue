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
  import 'aos/dist/aos.css';
  import './assets/css/main.min.css';

  import navbar from "./components/navbar.vue";
  import sidebar from "./components/sidebar.vue";
  import footerbar from "./components/footerbar.vue";
export default {
  name: "Home",
  components: {
    navbar,
    sidebar,
    footerbar,
  }
};
</script>
