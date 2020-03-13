<template>
  <nav
    :class="{ 'navbar--hidden': !showNavbar }"
    class="shadow-sm navbar navbar-expand-md navbar-light bg-white py-md-3 py-0 pl-3 pl-md-5"
  >
    <router-link class="navbar-brand pb-sm-3 pb-md-0" exact to="/">
      <img class="p-2 p-md-1" height="60" src="static/img/logo.png" />
    </router-link>
    <button
      class="navbar-toggler float-left"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link exact to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/menu" class="nav-link">Menu</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/social" class="nav-link">Social</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    };
  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    }
  }
};
</script>
