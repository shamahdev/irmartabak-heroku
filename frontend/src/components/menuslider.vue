<template>
  <section id="favorite">
    <div class="container-fluid row p-0 m-0 mx-auto">
      <div class="col-md-12 p-0">
        <h1 class="text-center display-4 my-5">Menu Paling Populer</h1>
      </div>
    </div>
    <div data-aos="fade-up" class="container-fluid row p-0 m-0 mx-auto">
      <div class="col-9 p-0 mx-auto mb-2 pb-5">
        <carousel
          class="mdi"
          :autoplay="true"
          :scrollPerPage="false"
          :perPage="1"
          :perPageCustom="[
            [480, 1],
            [768, 2],
            [992, 3]
          ]"
          :navigationEnabled="true"
          :navigationNextLabel="'<i class=\'fas fa-arrow-right fa-lg\'></i>'"
          :navigationPrevLabel="'<i class=\'fas fa-arrow-left fa-lg\'></i>'"
          :paginationEnabled="false"
          :loop="true"
        >
          <slide :key="x" v-for="x in 3" v-if="loading">
            <div class="card card--menu card--disable mx-2">
              <div class="image-card">
                <img class="card-img-top img-fluid fit-cover" />
              </div>
              <div class="card-img-overlay skeleton-card-overlay"></div>
            </div>
          </slide>
          <slide
            :key="martabak"
            v-for="martabak in martabakmenu"
            v-if="martabak.id != currentMartabak"
          >
            <div :key="rating.object_id" v-for="rating in ratingdata">
              <div v-if="rating.object_id == martabak.id">
                <menucard
                  :lowest_price="martabak.lowest_price"
                  :name="martabak.name"
                  :rating="parseFloat(rating.average)"
                  :img="martabak.image"
                  :slug="martabak.slug"
                />
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
    <div class="container-fluid row p-0 m-0 mx-auto mb-5">
      <div v-if="loading" class="col mx-auto p-0 text-center">
        <button type="button" class="mx-auto btn btn-skeleton btn-lg px-5 py-3">
          Menu Lainnya
        </button>
      </div>
      <div v-if="!loading" class="col mx-auto p-0 text-center">
        <router-link
          :to="'/menu'"
          tag="button"
          type="button"
          class="mx-auto btn btn-primary btn-lg px-5 py-3"
        >
          Menu Lainnya
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "menuslider",
  data() {
    return {
      martabakmenu: [],
      ratingdata: [],
      errored: false,
      loading: true
    };
  },
  components: {
    menucard: () => import("../components/menucard.vue")
  },
  created() {
    this.$axios.get("/api/rating/").then(response => {
      this.ratingdata = response.data;
    });
    this.$axios
      .get("/api/martabak/")
      .then(response => {
        this.martabakmenu = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
    setTimeout(() => (this.loading = false), 500);
  },
  props: {
    currentMartabak: Number
  }
};
</script>
