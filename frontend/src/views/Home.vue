<template>
  <div class="home">
    <section id="landing">
      <homeslider target="#buymethod" />
      <!-- Layanan Pemesanan Modal -->
      <modal id="buymethod" title="Pilih Layanan Pemesanan">
        <div class="row m-0">
          <div class="col-12 mx-auto">
             <p class="lead2 mb-4">
                Pilih cabang yang paling dekat dengan lokasi kamu saat ini! <a class="text-warning" href="https://www.google.com/maps/search/Insinyur+Martabak">Tidak tau dimana? klik disini!</a>
            </p>
        </div>
        <div class="col-12 mx-auto">
          <p class="lead3">Kiaracondong</p>
            <div> 
              <a href="" class="btn btn-primary px-5 py-3" >GoFood</a><!--
            --><a href="https://food.grab.com/id/id/restaurant/insinyur-martabak-ir-martabak-babakan-sari-delivery/IDGFSTI000013nr" class="btn btn-dark px-5 py-3">GrabFood</a>
           </div>
        </div>
        <div class="col-12 mx-auto">
          <p class="lead3 mt-3">Cibaduyut</p>
            <div> 
              <a href="" class="btn btn-primary px-5 py-3" >GoFood</a><!--
            --><a href="" class="btn btn-dark px-5 py-3">GrabFood</a>
           </div>
        </div>
        <div class="col-12 mx-auto">
          <p class="lead3 mt-3">Cijerah</p>
            <div> 
              <a href="https://gofood.co.id/bahasa/bandung/restaurant/insinyur-martabak-ir-martabak-cijerah-01b2ca13-eecb-4c5a-8835-207ba3e8e59f" class="btn btn-primary px-5 py-3" >GoFood</a><!--
            --><a href="" class="btn btn-dark px-5 py-3">GrabFood</a>
           </div>
        </div>
        <div class="col-12 mx-auto mb-4">
          <p class="lead3 mt-3">Tubagus Ismail Raya (GrabFood Only)</p>
            <div> 
            <a href="https://food.grab.com/id/id/restaurant/%F0%9F%8C%A1%EF%B8%8F%F0%9F%9B%A1%EF%B8%8Finsinyur-martabak-tubagus-ismail-grabkitchen-delivery/6-CYVFLE3CJETYNE" class="btn btn-dark px-5 py-3">GrabFood</a>
           </div>
        </div>
        </div>
      </modal>
      <!-- End -->
    </section>
    <section id="aboutus">
      <div
        class="container-fluid row align-items-center p-0 m-0 position-relative"
      >
        <div class="col-md-5 col-sm-12 p-0 d-none d-md-flex">
          <img class="w-100 martabak" src="/static/img/stand.jpg" alt="" />
        </div>
        <div class="col-md-8 p-0 my-auto aboutus">
          <h1 class="text-center display-4 my-5">Tentang Kami</h1>
          <div class="jumbotron-fluid bg-primary px-5 pt-5 pb-0">
            <h1 class="display-5 mb-3 mt-5">The Professional Martabak Maker</h1>
            <p class="lead2 mb-5">
              Insinyur martabak adalah sebuah brand martabak yang didirikan
              oleh para ahli dalam bidangnya. Dengan konsep proyek open
              kitchen yang menyajikan berbagai varian martabak manis dan
              martabak telur.
            </p>
            <div class="btn-group mx-auto mx-md-0">
              <button
                data-toggle="modal"
                data-target="#aboutmodal"
                class="btn btn-dark btn-lg px-5 py-3"
              >
                Baca Selengkapnya
              </button>
            </div>
            <!-- Modal Tentang -->
            <modal id="aboutmodal" title="The Professional Martabak Maker">
              <div class="container-fluid row m-0 p-0">
                <div class="col-12 d-none d-md-block text-center py-2">
                  <img class="img-fluid w-50" src="/static/img/icon.png" alt="Insinyur Martabak Brand Icon" />
                </div>
                <div class="col-12 py-2 my-auto">
                  <p class="lead2 my-3">
                    Insinyur Martabak Berdiri sejak tahun 2017 hingga kini telah
                    melebarkan sayap hingga empat cabang yang tersebar di Kota
                    Bandung. Insinyur Martabak menyediakan menu yang lengkap mulai
                    dari martabak klasik hingga martabak dengan inovasi yang modern
                    dan kekinian.</p>
                  <p class="lead2 my-3">
                    Dengan konsep yang unik dan rasa produk yang
                    spesial serta selalu terjaga kualitasnya, Insinyur Martabak
                    selalu digemari oleh para pecinta martabak yang pastinya telah
                    mendapat tempat spesial di hati para pelanggannya.</p>
                  <p class="lead3 mt-3">INSINYUR MARTABAK 2017-2020</p>
                </div>
              </div>
            </modal>
            <!-- End -->
          </div>
        </div>
      </div>
    </section>
    <menuslider class="py-3 py-md-5" />
    <maplocation />
    <section id="comment">
      <div class="container-fluid row p-0 m-0 mx-auto">
        <div class="text-center col-md-12 p-0">
          <h1 class="display-4 mt-5 pt-4">Tanggapan Pengunjung</h1>
          <p class="mb-5 pb-4">
            Ingin komentarnya di post juga? Mention kami di social media dengan hashtag <b>#irmartabak_moment</b>
          </p>
        </div>
      </div>
      <commentslider />
    </section>
    <section id="available" class="p-3">
      <div class="container-fluid row p-0 m-0 my-5 mx-auto">
        <div class="col-md-12 p-0 text-center">
          <h1 class="display-4 mt-0 mt-md-3">
            Tersedia Juga di
          </h1>
          <p class="mb-0 mb-md-3">Dapatkan banyak promo diskon dengan menggunakan layanan dibawah ini!</p>

        </div>
      </div>
      <div class="row mt-5 p-0 m-0 mx-auto my-0 my-md-5 text-center">
        <div class="col text-center">
        <div class="col-6 col-md-5 col-lg-3 d-inline-block pb-2 pb-md-0 px-0 px-md-4">
            <img class="img-fluid" src="/static/img/gofood.png" alt="Insinyur Martabak di GoFood">
        </div>
        <div class="col-6 col-md-5 col-lg-3 d-inline-block px-0 px-md-4">
            <img class="img-fluid" src="/static/img/grabfood.png" alt="Insinyur Martabak di GrabFood">
        </div>
        </div>
      </div>
    </section>
    <section id="quotes" class="px-5 px-md-0 pt-2">
      <div class="container-fluid row p-0 m-0">
        <div class="maskot col-md-6 px-5 order-12 order-md-1">
          <img src="/static/img/maskot.png" class="img-fluid w-100 px-1 px-md-3 mx-auto" srcset="" />
        </div>
        <div class="quote col-md-6 p-0 my-auto mx-auto pr-0 pr-md-4 py-5 h-100 order-1 order-md-12">
          <h1 class="display-5 my-2">
            "Bahagiamu kamu yang ciptakan, dan kami hadir untuk menyempurnakan!"
          </h1>
          <p class="lead3 mb-5">
            - Insinyur Martabak, Complement your Happiness!
          </p>
          <p class="lead mt-5">
            Tunggu apa lagi? Bahagiakan dirimu dan orang di dekatmu sekarang!
          </p>
          <button
            class="btn btn-primary btn-lg px-5 py-3 mt-3 mb-5"
            data-toggle="modal"
            data-target="#buymethod"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      starStyle: {
        fullStarColor: "#f1c420",
        starWidth: 30,
        starHeight: 30
      }
    };
  },
  components: {
    homeslider: () => import("../components/homeslider.vue"),
    maplocation: () => import("../components/maplocation.vue"),
    menuslider: () => import("../components/menuslider.vue"),
    modal: () => import("../components/modal.vue"),
    comment: () => import("../components/comment.vue"),
    commentslider: () => import("../components/commentslider.vue"),
  }
};
</script>
