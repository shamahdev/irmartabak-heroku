<template>
  <router-link :to="'/menu/' + slug" exact>
    <div data-aos="zoom-in" class="card card--menu mx-2">
      <div class="image-card">
      <img
        class="card-img-top img-fluid fit-cover"
        v-bind:src="img"
        :alt="slug"
      />
      </div>
      <div class="card-img-overlay">
        <p>{{ name }}</p>
        <div class="my-2 text-dark">
          <star-rating :rating="rating" :star-style="starStyle"></star-rating>
        </div>
        <h1 class="display-4 price">{{ "Rp. " + price}}</h1>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "menucard",
  data() {
    return {
      starStyle: {
        emptyStarColor: "#111111",
        starWidth: 20,
        starHeight: 20
      }
    };
  },
  props: {
    rating: Number,
    name: String,
    price: Number,
    slug: String,
    img: String
  }
};
</script>
