<template>
  <div class="detail">

  <section v-if="loading">
      <div class="container-fluid row p-0 m-0 mb-5">
        <div class="skeleton-thumbnail"/>
      </div>
      <!-- Skeleton Load -->
      <div class="container-fluid row p-0 m-0 my-5">
        <div class="col-10 col-md-8 mx-auto my-auto p-0">
          <p class="display-5 mt-5 mb-0 skeleton-txt">Martabak Super</p>
          <div class="h2 my-3">
            <p class="inline-block mr-3 skeleton-txt">Rp. 30000</p>
          </div>
          <div> 
          <button
            class="btn btn-skeleton btn-lg px-5 py-3"
            data-toggle="modal"
            data-target="#buymethod"
          >
            Pesan Sekarang
          </button><!--
          --><button
            class="btn btn-skeleton btn-lg px-5 py-3"
          >
            Berikan Rating
          </button>
          </div>
          <div class="my-5 px-0 py-4 px-md-4">
            <label class="lead3 skeleton-txt">Rating</label>
            <label class="lead3 skeleton-txt">Ukuran Tersedia</label
            >
            <p class="skeleton-txt">Small</p>
            <label class="lead3 skeleton-txt">Deskripsi</label>
          </div>
        </div>
      </div>
      <!-- Skeleton End -->
  </section>

    <vue-page-transition name="fade-in-up">
    <section v-if="!loading" id="detailmartabak" :key="martabak.id" v-for="martabak in martabakdata">
      <div class="container-fluid row p-0 m-0 mb-5">
        <img class="thumbnail fit-cover" :src="martabak.image" :alt="martabak.name" />
   </div>
      <div class="container-fluid row p-0 m-0 my-5">
        <div class="col-10 col-md-8 mx-auto my-auto p-0" :key="rating.average" v-for="rating in ratingmartabak">
        <div v-if="rating.object_id == martabak.id" :cm="currentM = martabak.id" >
          <div :key="r" v-for="r in ratinguser">
            <div v-if="r.rating == rating.id">
              <div v-if="giverating.ip == r.ip">
                <div :ur="userrating = r.score"/>
                <div :rip="ratingip = r.ip"/>
              </div>
            </div>
          </div>
          <div :rid="giverating.rating = rating.id">
            <p class="display-5 mt-5 mb-0">{{ martabak.name }}</p>
            <star-rating
                class="my-3"
                :rating="parseFloat(rating.average)"
                :read-only="true"
                :increment="0.1"
                :star-size="32"
              ></star-rating>
            <div class="h2 my-3">
              <p class="inline-block text-dark mr-3">{{ "Rp. " + martabak.price }}</p>
            </div>
            <div> 
            <button
              class="btn btn-primary btn-lg px-5 py-3"
              data-toggle="modal"
              data-target="#buymethod"
            >
              Pesan Sekarang
            </button><!--
            --><button
              v-if="already_rate !== null"
              class="btn btn-dark btn-lg px-5 py-3"
              data-toggle="modal"
              data-target="#startrating"
            >
              Berikan Rating
            </button>
            </div>
            <modal id="startrating" title="Berikan Rating">
              <div v-if="!already_rate" class="row p-2 m-0 mb-3">
                <star-rating
                @rating-selected="rate()"
                v-model="giverating.score"
                :increment="0.5"
                :star-size="46"
                text-class="custom-text"
              ></star-rating>
              </div>
              <!-- If already rate -->
              <div v-if="already_rate" class="row p-2 m-0">
                <star-rating
                :rating="userrating"
                :read-only="true"
                :increment="0.5"
                :star-size="46"
                ></star-rating>
              </div>
                <div class="p-2 mt-2 mb-3" v-if="already_rate">Kamu telah memberikan rating {{userrating + " untuk " + martabak.name }}</div> 
            </modal>
            <!-- Modal2 -->
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
          </div>
          <div class="my-5 px-0 py-4 px-md-4" v-if="rating.object_id == martabak.id">
            <label class="lead3">Nama</label>
            <p>{{ martabak.name }}</p>
            <label class="lead3">Harga</label>
            <p>{{ "Rp " + martabak.price }}</p>
            <label class="lead3">Rating</label>
            <p>{{ parseFloat(rating.average) + "/5" }}</p>
            <label class="lead3">Ukuran Tersedia</label
            >
            <p>{{ martabak.Size }}</p>
            <label class="lead3">Deskripsi</label>
            <p>{{ martabak.deskripsi }}</p>
          </div>
          </div>
        </div>
      </div>
    </section>
    </vue-page-transition>
    <menuslider class="py-3 py-md-5" :currentMartabak="currentM"/>
  </div>
</template>

<script>
const martabakState = () =>({
  giverating: {
    "ip": "",
    "score": null,
    "user": null,
    "rating": null
  },
  martabakdata: [],
  ratingmartabak: [],
  ratinguser: [],
  ratingdata: [],
  errored: false,
  loading: true,
  currentM: null,
  ratingip: '',
  checked: null
});
export default {
  components: {
    modal: () => import("../components/modal.vue"),
    menuslider: () => import("../components/menuslider.vue")
  },
  name: "Detail",
  data() {
    return{
      giverating: {
        "ip": "",
        "score": null,
        "user": null,
        "rating": null
      },
      martabakdata: [],
      ratingmartabak: [],
      ratinguser: [],
      ratingdata: [],
      errored: false,
      loading: true,
      currentM: null,
      ratingip: '',
      checked: null
    }
  },
  created () {
    this.getData()
  },
  computed: {
    already_rate(){
      if(this.giverating.ip == this.ratingip){
        this.checked = true;
      }else{
        this.checked = false;
      }
      return this.checked
    },
  },
  methods: {
    getData(){
    this.$axios
      .get('https://api.ipify.org/?format=json')
      .then(response => {
        this.giverating.ip = response.data["ip"];
      });
    this.$axios
    .get('/api/martabak/')
    .then(response => {
      this.martabakdata = response.data.filter(m => m.slug.includes(this.$route.params.name))
    });
    this.$axios
      .get('/api/rating/')
      .then(response => {
        this.ratingmartabak = response.data
      });
    this.$axios
      .get('/api/userrating/')
      .then(response => {
        this.ratinguser = response.data
      })
      .catch(error => {
      console.log(error)
      this.errored = true
      })
      .finally(() =>
        setTimeout(() => this.loading = false, 500)
      )
    },
    rate() {
      this.$axios.post('/api/userrating/', this.giverating)
      .then(r => {
      })
      .catch(error => {
        console.log(error.response)
      });
    location.reload();
    }
  },
  watch: {
    $route (to, from){
      Object.assign(this.$data, martabakState());
      this.getData();
    }
}
};
</script>
