<template>
  <div class="detail">
    <vue-page-transition name="fade-in-up">
    <section id="detailmartabak" :key="martabak.id" v-for="martabak in martabakdata">
      <div class="container-fluid row p-0 m-0 mb-5">
        <img class="thumbnail fit-cover" :src="martabak.image" :alt="martabak.name" />
      </div>
      <div class="container-fluid row p-0 m-0 my-5">
        <!-- This is function | Not gonna be rendered-->
        <div :key="rating.average" v-for="rating in ratingmartabak">
          <div :key="r.id" v-for="r in ratinguser">
            <div v-if="r.rating == rating.id">
            <div :rip="ratingip = r.ip"/>
            <div :ur="userrating = r.score"/>
          </div>
        </div>
        <!-- end -->
        <div class="col-sm-11 col-md-8 mx-auto my-auto p-0" v-if="rating.object_id == martabak.id" :cm="currentM = martabak.id" >
          <div :rid="giverating.rating = rating.id">
            <p class="display-5 mt-5 mb-0">{{ martabak.name }}</p>
            <star-rating
              class="my-3"
              :rating="parseFloat(rating.average)"
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
              Berikan Rating
            </button>
            </div>
            <modal id="startrating" title="Berikan Rating">
              <div class="row m-0">
                <vue-stars
                  class="h1"
                  name="menurating"
                  inactive-color="#111111"
                  v-model="giverating.score"
                  shadow-color="none"
                  active-color="#ed8a19"
                  hover-color="#ed8a19"
                  @input="rate()"
                  :value="parseFloat(rating.average)"
                  :readonly="already_rate"
                >
                </vue-stars>
              </div>
                <div v-if="already_rate">Kamu telah memberikan rating {{userrating + " untuk " + martabak.name }}</div> 
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
            <p class="lead">{{ parseFloat(rating.average) + "/5" }}</p>
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
    </vue-page-transition>
    <menuslider class="py-3 py-md-5" :currentMartabak="currentM" />
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
      martabakdata: [],
      ratingmartabak: [],
      ratinguser: [],
      errored: false,
      loading: true,
      currentM: null,
      slug: this.$route.params.name,
      starStyle: {
        emptyStarColor: "#111111",
        starWidth: 25,
        starHeight: 25
      },
      ratingdata: [],
      checked: false
    };
  },
  components: {
    modal: () => import("../components/modal.vue"),
    menuslider: () => import("../components/menuslider.vue")
  },
  mounted () {
    this.getData()
  },
  computed: {
    already_rate(){
      if(this.giverating.ip == this.ratingip){
        this.checked = true;
        return this.checked
      }else{
        this.checked = false;
        return this.checked
      }
    },
  },
  methods: {
    getData(){
    this.$axios
      .get('https://api.ipify.org/?format=json')
      .then(response => {
        this.giverating.ip = response.data["ip"]
      });
    this.$axios
      .get('http://127.0.0.1:8000/api/userrating/')
      .then(response => {
        this.ratinguser = response.data
      });
    this.$axios
      .get('http://127.0.0.1:8000/api/rating/')
      .then(response => {
        this.ratingmartabak = response.data
      });
    this.slug = this.$route.params.name;
    this.$axios
      .get('http://127.0.0.1:8000/api/martabak/')
      .then(response => {
        this.martabakdata = response.data.filter(m => m.slug.includes(this.slug))
      })
      .catch(error => {
      console.log(error)
      this.errored = true
      })
    .finally(() => this.loading = false)
    },
    rate() {
      this.$axios.post('http://127.0.0.1:8000/api/userrating/', this.giverating)
      .then(r => {
      })
      .catch(error => {
        console.log(error.response)
      });
    location.reload();
    }
  },
  watch:{
    $route (to, from){
        this.getData();
    }
} 
};
</script>
