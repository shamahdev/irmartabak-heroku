<template>
  <div class="Menu">
    <section id="news" class="py-3 py-md-5">
      <div class="position-relative container-fluid row m-0 mx-auto">
        <div class="col-md-5 p-0 ml-auto">
          <div class="sticky-top article p-3" style="z-index: 0">
            <img src="/static/img/stand.jpg" class="img-fluid w-100 thumb fit-cover" alt="">
            <p class="p-3 text-muted lead3 text-right">17 April 2020 by Insinyur Martabak</p>
            <p class="display-4 mt-2">Pembukaan Website resmi Insinyur Martabak</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, porro sunt. Ea explicabo ipsum architecto, vel tempore rerum et. Saepe eveniet cum aliquam similique.</p>
            <router-link exact to="/" class="btn btn-primary btn-lg px-5 py-3">Baca Selengkapnya</router-link>
          </div>
        </div>
        <div class="col-md-5 row p-0 mr-auto">
            <div data-aos="zoom-in" :key="x" v-for="x in 5" class="col-6 col-md-12 col-lg-6 p-1">
              <div class="article p-3">
                <img src="/static/img/stand.jpg" class="img-fluid w-100 thumb3 fit-cover" alt="">
                <p class="d-none d-md-block p-2 text-muted lead3 text-right mb-0">17 April 2020</p>
                <p class="lead pt-2">Pembukaan Website resmi Insinyur Martabak</p>
                <p class="d-none d-md-block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam. Accusantium?</p>
                <router-link exact to="/" class="btn btn-primary btn-block py-3">Baca Selengkapnya</router-link>
              </div>
            </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>
