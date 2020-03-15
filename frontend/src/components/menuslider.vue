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
          <slide v-bind:key="martabak.id" v-for="martabak in martabakmenu">
            <menucard
              :price="martabak.price"
              :name="martabak.name"
              :rating="rating"
              :img="martabak.image"
              :slug="martabak.slug"
            />
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
      rating: 3.7,
      errored: false,
      loading: true,
    }
  },
  components: {
    menucard: () => import("../components/menucard.vue")
  },
   mounted () {
    this.$axios
      .get('http://127.0.0.1:8000/api/martabak/')
      .then(response => {
        this.martabakmenu = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
};
</script>
