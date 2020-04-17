<template>
  <div class="Menu">
    <section id="news" class="py-3 py-md-5">
      <div class="position-relative container-fluid row m-0 mx-auto">
        <div class="col-md-5 p-0 ml-auto">
          <div class="sticky-top article p-3" style="z-index: 0">
            <img src="/static/img/stand.jpg" class="img-fluid" alt="">
            <p class="p-3 text-muted lead3 text-right">17 April 2020 by Insinyur Martabak</p>
            <p class="display-4 mt-2">Pembukaan Website resmi Insinyur Martabak</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, porro sunt. Ea explicabo ipsum architecto, vel tempore rerum et. Saepe eveniet cum aliquam similique.</p>
            <router-link exact to="/" class="btn btn-primary btn-lg px-5 py-3">Baca Selengkapnya</router-link>
          </div>
        </div>
        <div class="col-md-5 row p-0 mr-auto">
            <div class="col-6 col-md-12 col-lg-6 p-1">
              <div class="article p-3">
                <img src="/static/img/stand.jpg" class="img-fluid" alt="">
                <p class="p-2 text-muted lead3 text-right mb-0">17 April 2020</p>
                <p class="lead">Pembukaan Website resmi Insinyur Martabak</p>
                <p class="d-none d-md-block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam. Accusantium?</p>
                <router-link exact to="/" class="btn btn-primary btn-block px-3 py-2">Baca Selengkapnya</router-link>
              </div>
            </div>
            <div class="col-6 col-md-12 col-lg-6 p-1">
              <div class="article p-3">
                <img src="/static/img/stand.jpg" class="img-fluid" alt="">
                <p class="p-2 text-muted lead3 text-right mb-0">17 April 2020</p>
                <p class="lead">Pembukaan Website resmi Insinyur Martabak</p>
                <p class="d-none d-md-block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam. Accusantium?</p>
                <router-link exact to="/" class="btn btn-primary btn-block px-3 py-2">Baca Selengkapnya</router-link>
              </div>
            </div>
            <div class="col-6 col-md-12 col-lg-6 p-1">
              <div class="article p-3">
                <img src="/static/img/stand.jpg" class="img-fluid" alt="">
                <p class="p-2 text-muted lead3 text-right mb-0">17 April 2020</p>
                <p class="lead">Pembukaan Website resmi Insinyur Martabak</p>
                <p class="d-none d-md-block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, quibusdam. Accusantium?</p>
                <router-link exact to="/" class="btn btn-primary btn-block px-3 py-2">Baca Selengkapnya</router-link>
              </div>
            </div>
        </div>
      </div>
      <div class="container-fluid row p-0 m-0 mx-auto my-5">
        <div class="col-10 mx-auto my-auto p-0 text-center">
          <img
            src="/static/img/icon.png"
            class="img-fluid my-2"
            width="140px"
            alt=""
          />
          <p class="display-4 my-5">
            Ikuti Sosial Media kami untuk informasi menarik lainnya!
          </p>
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
