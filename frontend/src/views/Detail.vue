<template>
  <div class="detail">
    <section id="detailmartabak">
      <div class="container-fluid row p-0 m-0 mb-5">
        <img class="thumbnail fit-cover" :src="img" :alt="name" />
      </div>
      <div v-if="available" class="container-fluid row p-0 m-0 my-5 m">
        <div class="col-sm-12 col-md-8 mx-auto my-auto p-0">
          <div class="container-fluid">
            <p class="display-4 mt-5 mb-0">{{ name }}</p>
            <star-rating
              class="my-3"
              :rating="rating"
              :star-style="starStyle"
            ></star-rating>
            <div class="h2 my-3">
              <p class="inline-block text-dark mr-3">{{ "Rp " + price }}</p>
            </div>
            <button
              class="btn btn-primary btn-lg px-3 px-md-5 py-3"
              href="#"
              role="button"
              data-toggle="modal"
              data-target="#buymethod"
            >
              Pesan Sekarang
            </button>
            <button
              class="btn btn-secondary btn-lg px-3 px-md-5 py-3"
              href="#"
              role="button"
              data-toggle="modal"
              data-target="#startrating"
            >
              Berikan Rating
            </button>
            <modal id="startrating" title="Berikan Rating">
              <div class="row m-0">
                <vue-stars
                  @input="rate()"
                  class="h1"
                  name="menurating"
                  inactive-color="#737373"
                  v-model="newrating"
                  shadow-color="none"
                  hover-color="#f1c420"
                  :max="5.0"
                  :value="newrating"
                  :readonly="checked"
                >
                </vue-stars>
              </div>
            </modal>
            <!-- Modal2 -->
            <modal id="buymethod" title="Pilih Layanan Pemesanan">
              <div class="row m-0">
                <div class="col-md-6 p-5 my-auto">
                  <a
                    href="https://gofood.co.id/bahasa/bandung/restaurant/insinyur-martabak-ir-martabak-cijerah-01b2ca13-eecb-4c5a-8835-207ba3e8e59f"
                  >
                    <img
                      class="img-fluid"
                      src="static/img/gofood.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="col-md-6 p-5 my-auto">
                  <a
                    href="https://food.grab.com/id/id/restaurant/insinyur-martabak-ir-martabak-babakan-sari-delivery/IDGFSTI000013nr"
                  >
                    <img
                      class="img-fluid"
                      src="static/img/grabfood.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </modal>
          </div>
          <div class="my-5 p-4">
            <label class="lead3" for="formGroupExampleInput">Nama</label>
            <p class="lead">{{ name }}</p>
            <label class="lead3" for="formGroupExampleInput">Harga</label>
            <p class="lead">{{ "Rp " + price }}</p>
            <label class="lead3" for="formGroupExampleInput">Rating</label>
            <p class="lead">{{ rating + "/5" }}</p>
            <label class="lead3" for="formGroupExampleInput"
              >Ukuran Tersedia</label
            >
            <p class="lead">{{ size }}</p>
            <label class="lead3" for="formGroupExampleInput">Deskripsi</label>
            <p class="lead">{{ $route.params.name }}</p>
          </div>
        </div>
      </div>
    </section>
    <menuslider
      class="py-3 py-md-5"
      title="Cek Menu Lainnya"
      :forin="9"
      name="Martabak Super Sapi Mozarella"
      :price="20000"
      :rating="5"
      slug="martabak-super-sapi-mozarella"
      img="static/img/martabak.jpg"
    />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Detail",
  data() {
    return {
      available: true,
      starStyle: {
        fullStarColor: "#f1c420",
        starWidth: 25,
        starHeight: 25
      },
      name: "Martabak Super Sapi Mozarella!",
      img: "static/img/martabak.jpg",
      price: "30000",
      rating: 4.4,
      size: "Kecil",
      checked: false
    };
  },
  components: {
    modal: () => import("../components/modal.vue"),
    menuslider: () => import("../components/menuslider.vue")
  },
  methods: {
    rate() {
      this.checked = true;
      alert("Anda berhasil merating " + this.newrating);
    }
  }
};
</script>
