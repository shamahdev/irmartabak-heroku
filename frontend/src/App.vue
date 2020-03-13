<template>
  <div id="app">
    <sidebar v-bind:class="{ hidedesktop: $route.meta.hideDesktop }"></sidebar>
    <div class="navigation">
      <navbar></navbar>
    </div>
    <vue-page-transition name="fade-in-up">
      <router-view />
    </vue-page-transition>
    <footerbar></footerbar>
  </div>
</template>

<style lang="scss">
@import "./assets/css/main.css";
</style>

<script>
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
