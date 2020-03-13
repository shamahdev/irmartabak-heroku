<template>
  <section id="favorite">
    <div class="container-fluid row p-0 m-0 mx-auto">
      <div class="col-md-12 p-0">
        <h1 class="text-center display-4 my-5">{{ title }}</h1>
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
            [768, 3]
          ]"
          :navigationEnabled="true"
          :navigationNextLabel="''"
          :navigationPrevLabel="''"
          :paginationEnabled="false"
          :loop="true"
        >
          <slide v-bind:key="i" v-for="i in forin">
            <menucard
              :price="price"
              :name="name"
              :rating="rating"
              :img="img"
              :slug="slug"
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
  components: {
    menucard: () => import("../components/menucard.vue")
  },
  props: {
    title: String,
    forin: Number,
    name: String,
    slug: String,
    price: Number,
    rating: Number,
    img: String
  }
};
</script>
