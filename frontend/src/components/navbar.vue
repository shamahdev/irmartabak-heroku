<template>
<<<<<<< HEAD
  <nav class="navbar navbar-expand-lg navbar-light bg-white py-md-2 py-0 pl-3 pl-md-5">
  <button data-aos="fade-up" data-aos-offset="400" id="toTop" class="btn btn-dark py-3 px-4" @click="scrollToTop()" title="Back to top"><i class="fas fa-arrow-up fa-lg"></i></button>
    <router-link class="navbar-brand w-auto text-center pb-sm-3 pb-md-0" exact to="/">
=======
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white py-md-2 py-0 pl-3 pl-md-5"
  >
    <button
      data-aos="fade-up"
      data-aos-offset="400"
      id="toTop"
      class="btn btn-dark py-3 px-4"
      @click="scrollToTop()"
      title="Back to top"
    >
      <i class="fas fa-arrow-up fa-lg"></i>
    </button>
    <router-link
      class="navbar-brand w-auto text-center pb-sm-3 pb-md-0"
      exact
      to="/"
    >
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
      <img class="p-1" height="60px" src="/static/img/logo.png" />
    </router-link>
    <button
      class="navbar-toggler float-left shadow-none"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars fa-lg"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto text-center">
        <li class="nav-item">
          <router-link exact to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/menu/" class="nav-link">Menu</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/social/" class="nav-link">Social</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news/" class="nav-link">News &amp; Promo</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/awards/" class="nav-link">Awards</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact/" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    scrollToTop() {
<<<<<<< HEAD
          window.scrollTo(0,0);
      }
=======
      window.scrollTo(0, 0);
    }
>>>>>>> e348fbfdc7302b54eff23e38d8ff2c66761c95cd
  }
};
</script>
