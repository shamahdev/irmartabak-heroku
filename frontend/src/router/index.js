import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VueCarousel from "vue-carousel";
import VuePageTransition from "vue-page-transition";
import StarRating from 'vue-star-rating'
import VueAxios from '../components/plugins/axios';

Vue.component("star-rating", StarRating);

Vue.use(VuePageTransition);
Vue.use(VueCarousel);
Vue.use(VueRouter);
Vue.use(VueAxios);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { hideDesktop: false },
    component: Home
  },
  {
    path: "/social/",
    name: "Social",
    meta: { hideDesktop: true },
    component: () => import(/* webpackChunkName: "social" */ "../views/Social.vue")
  },
  {
    path: "/contact/",
    name: "Contact",
    meta: { hideDesktop: true },
    component: () => import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/menu/",
    name: "Menu",
    meta: { hideDesktop: true },
    component: () => import(/* webpackChunkName: "menu" */ "../views/Menu.vue")
  },
  {
    path: "/location/",
    name: "Location",
    meta: { hideDesktop: true },
    component: () => import(/* webpackChunkName: "location" */ "../views/Location.vue")
  },
  {
    path: "/disclaimer/",
    name: "Disclaimer",
    meta: { hideDesktop: true },
    component: () => import(/* webpackChunkName: "disclaimer" */ "../views/Disclaimer.vue")
  },
  {
    path: "/privacypolicy/",
    name: "PrivacyPolicy",
    meta: { hideDesktop: true },
    component: () => import(/* webpackChunkName: "privacy" */ "../views/PrivacyPolicy.vue")
  },
  {
    path: "/menu/:name/",
    name: "Detail",
    meta: { hideDesktop: true },
    component: () => import(/* webpackChunkName: "detail" */ "../views/Detail.vue")
  },
  { 
    path: "*",
    name: "Error404",
    meta: { hideDesktop: true },
    component: () => import(/* webpackChunkName: "error404" */ "../views/Error404.vue")
  },
  // {
  //   path: "/dev",
  //   name: "Location",
  //   meta: { hideDesktop: true },
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Dev.vue")
  // },
  // {
  //   path: "/faq",
  //   name: "Location",
  //   meta: { hideDesktop: true },
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/FAQ.vue")
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
});

export default router;
