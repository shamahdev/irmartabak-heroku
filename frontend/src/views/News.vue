<template>
  <div class="Menu">
    <section id="news" class="py-3 py-md-5">
      <div class="position-relative container-fluid row m-0 mx-auto">
        <div class="col-md-5 p-0 ml-auto">
          <div class="sticky-top article p-3" style="z-index: 0">
            <img src="/static/img/stand.jpg" class="img-fluid w-100 thumb2 fit-cover" alt="">
            <p class="p-3 text-muted lead3 text-right">15 April 2020 by Insinyur Martabak</p>
            <p class="display-4 mt-2">Pembukaan Website resmi Insinyur Martabak</p>
            <p>Kini Insinyur Martabak sudah ada webnya loh! Kini kalian dapat mengetahui harga menu-menu yang ada, kalian juga bisa lebih mudah untuk memberikan kami tanggapan serta memberikan rating untuk menu yang menurut kamu pantas untuk diacungi jempol</p>
            <router-link exact to="/" class="btn btn-primary btn-lg px-5 py-3">Baca Selengkapnya</router-link>
          </div>
        </div>
        <div class="col-md-5 row p-0 mr-auto">
            <div data-aos="zoom-in" :key="x" v-for="x in 5" class="col-6 col-md-12 col-lg-6 p-1">
              <div class="article p-3">
                <img src="/static/img/stand.jpg" class="img-fluid w-100 thumb3 fit-cover" alt="">
                <p class="d-none d-md-block p-2 text-muted lead3 text-right mb-0">18 April 2020</p>
                <p class="lead pt-2">News &amp; Promo Coming Soon!</p>
                <p class="d-none d-md-block">Berita dan promo terbaru akan segera hadir untuk anda sahabat Insinyur Martabak</p>
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
