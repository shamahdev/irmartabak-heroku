import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VueCarousel from "vue-carousel";
import VuePageTransition from "vue-page-transition";
import { VueStars } from "vue-stars";
import StarRating from "vue-dynamic-star-rating";

Vue.component("star-rating", StarRating);
Vue.component("vue-stars", VueStars);
Vue.use(VuePageTransition);
Vue.use(VueCarousel);
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    meta: { hideDesktop: false },
    component: Home
  },
  {
    path: "/social",
    name: "Social",
    meta: { hideDesktop: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "social" */ "../views/Social.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { hideDesktop: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/menu",
    name: "Menu",
    meta: { hideDesktop: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "menu" */ "../views/Menu.vue")
  },
  {
    path: "/location",
    name: "Location",
    meta: { hideDesktop: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "location" */ "../views/Location.vue")
  },
  // {
  //   path: "/dev",
  //   name: "Location",
  //   meta: { hideDesktop: true },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Dev.vue")
  // },
  // {
  //   path: "/faq",
  //   name: "Location",
  //   meta: { hideDesktop: true },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/FAQ.vue")
  // },
  {
    path: "/disclaimer",
    name: "Disclaimer",
    meta: { hideDesktop: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "disclaimer" */ "../views/Disclaimer.vue")
  },
  {
    path: "/privacypolicy",
    name: "PrivacyPolicy",
    meta: { hideDesktop: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "privacy" */ "../views/PrivacyPolicy.vue")
  },
  {
    path: "/menu/:name",
    name: "Detail",
    meta: { hideDesktop: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Detail.vue")
  },
  { 
    path: "*",
    name: "Error404",
    meta: { hideDesktop: true },
    component: () =>
      import(/* webpackChunkName: "error404" */ "../views/Error404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
