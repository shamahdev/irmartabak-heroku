<template>
  <div class="detail">
    <section id="detailmartabak" :key="martabak.id" v-for="martabak in martabakdata">
      <div v-for="r in ratinguser">
        <div v-if="r.rating == martabak.id">
          <div v-bind="ratingip = r.ip"></div>
        </div>
      </div>
      <div class="container-fluid row p-0 m-0 mb-5" v-bind="giverating.rating = martabak.id">
        <img class="thumbnail fit-cover" :src="martabak.image" :alt="martabak.name" />
      </div>
      <div v-if="available" class="container-fluid row p-0 m-0 my-5 m">
        <div v-for="rating in ratingmartabak">
        <div class="col-sm-12 col-md-8 mx-auto my-auto p-0" v-if="rating.object_id == martabak.id" v-bind="rating.average = parseFloat(rating.average)">
          <div class="container-fluid">
            <p class="display-4 mt-5 mb-0">{{ martabak.name }}</p>
            <star-rating
              class="my-3"
              :rating="rating.average"
              :star-style="starStyle"
            ></star-rating>
            <div class="h2 my-3">
              <p class="inline-block text-dark mr-3">{{ "Rp " + martabak.price }}</p>
            </div>
            <div class="btn-group"> 
            <button
              class="btn btn-primary btn-lg px-3 px-md-5 py-3"
              data-toggle="modal"
              data-target="#buymethod"
            >
              Pesan Sekarang
            </button>
            <button
              class="btn btn-dark btn-lg px-3 px-md-5 py-3"
              data-toggle="modal"
              data-target="#startrating"
            >
              {{slug}}
              OKOK
              Berikan Rating
            </button>
            </div>
            <modal id="startrating" title="Berikan Rating">
              <div class="row m-0">
                <vue-stars
                  @input="rate()"
                  class="h1"
                  name="menurating"
                  inactive-color="#737373"
                  v-model="giverating.score"
                  shadow-color="none"
                  hover-color="#ed8a19"
                  :max="5.0"
                  :value="4"
                  :readonly="cekip"
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
                      src="/static/img/gofood.png"
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
                      src="/static/img/grabfood.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </modal>
          </div>
          <div class="my-5 p-4" v-if="rating.object_id == martabak.id">
            <label class="lead3">Nama</label>
            <p class="lead">{{ martabak.name }}</p>
            <label class="lead3">Harga</label>
            <p class="lead">{{ "Rp " + martabak.price }}</p>
            <label class="lead3">Rating</label>
            <p class="lead" v-bind="rating.average = parseFloat(rating.average)">{{ rating.average + "/5" }}</p>
            <label class="lead3">Ukuran Tersedia</label
            >
            <p class="lead">{{ martabak.Size }}</p>
            <label class="lead3">Deskripsi</label>
            <p class="lead">{{ martabak.deskripsi }}</p>
          </div>
          </div>
        </div>
      </div>
    </section>
    <menuslider class="py-3 py-md-5" />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Detail",
  data() {
    return {
      giverating: {
        "ip": "",
        "score": null,
        "user": null,
        "rating": null
      },
      martabakid: 1,
      newrating: 3,
      ratingip: '',
      martabakdetail: [],
      ratingu: [],
      slug: this.$route.params.name,
      available: true,
      starStyle: {
        starWidth: 25,
        starHeight: 25
      },
      name: "Martabak Super Sapi Mozarella!",
      img: "static/img/martabak.jpg",
      price: "30000",
      rating: 4.4,
      size: "Kecil",
      ratingdata: [],
      checked: false
    };
  },
  components: {
    modal: () => import("../components/modal.vue"),
    menuslider: () => import("../components/menuslider.vue")
  },
  mounted () {
    this.$axios
      .get('https://api.ipify.org/?format=json')
      .then(response => {
        this.giverating.ip = response.data["ip"]
      })
  },
  computed: {
    cekip(){
      if(this.giverating.ip == this.ratingip){
        this.checked = true;
        return this.checked
      }else{
        this.checked = false;
        return this.checked
      }
    },
    ratinguser(){
      this.$axios
      .get('http://127.0.0.1:8000/api/userrating/')
      .then(response => {
        this.ratingu = response.data
      })
      return this.ratingu
    },
    ratingmartabak(){
      this.$axios
      .get('http://127.0.0.1:8000/api/rating/')
      .then(response => {
        this.ratingdata = response.data
      })
      return this.ratingdata
    },
    martabakdata(){
      this.slug = this.$route.params.name;
      this.$axios
      .get('http://127.0.0.1:8000/api/martabak/')
      .then(response => {
        this.martabakdetail = response.data.filter(m => m.slug.includes(this.slug))
      });
      return this.martabakdetail
    }

  },
  methods: {
    rate() {
      this.$axios.post('http://127.0.0.1:8000/api/userrating/', this.giverating)
      .then(r => {
      })
    }
  }
};
</script>
