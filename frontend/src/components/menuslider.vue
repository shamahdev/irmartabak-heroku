<template>
  <section id="favorite">
    <div class="container-fluid row p-0 m-0 mx-auto">
      <div class="col-md-12 p-0">
        <h1 class="text-center display-4 my-5">Menu Paling Populer</h1>
      </div>
    </div>
    <div class="container-fluid row p-0 m-0 mx-auto">
      <div class="col-md-9 col-sm-12 p-0 mx-auto mb-5 pb-5">
        <carousel
          class="mdi"
          :autoplay="true"
          :scrollPerPage="false"
          :perPageCustom="[
            [480, 2],
            [1080, 3]
          ]"
          :navigationEnabled="true"
          :navigationNextLabel="''"
          :navigationPrevLabel="''"
          :paginationEnabled="false"
          :loop="true"
        >
          <slide v-if="loading">
             <div class="card card--menu mx-2">
              <div class="image-card">
              <img class="card-img-top img-fluid fit-cover"/>
              </div>
              <div class="card-img-overlay">
              </div>
            </div>
          </slide>
          <slide :key="martabak.id" v-for="martabak in martabakmenu" v-show="martabak.id != currentMartabak">
            <div :key="rating.object_id" v-for="rating in ratingdata">
              <div v-if="rating.object_id == martabak.id">
                <menucard
                  :price="martabak.price"
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
  </section>
</template>

<script>
export default {
  name: "menuslider",
  data (){
    return{
      martabakmenu: [],
      ratingdata: [],
      errored: false,
      loading: true,
    }
  },
  components: {
    menucard: () => import("../components/menucard.vue")
  },
   mounted () {
    this.$axios
    .get('https://webirmartabak.herokuapp.com/api/rating/')
    .then(response => {
      this.ratingdata = response.data
    });
    this.$axios
      .get('https:///webirmartabak.herokuapp.com/api/martabak/')
      .then(response => {
        this.martabakmenu = response.data  
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
  props: {
    currentMartabak: Number
  }
};
</script>
